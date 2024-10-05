'use client'
import { LogoutSvgComponent } from '@/shared/icons'
import { togglePageScrolling } from '@/shared/libs/common'
import { UiErrorMessage, UiLoader, UiSuccessMessage } from '@/shared/ui'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { CldUploadButton, CloudinaryUploadWidgetInfo } from 'next-cloudinary'

export const UploadDataTaskFile = () => {
	const uploadPreset = 'vwzrcbdr'

	const [isSuccess, setIsSuccess] = useState(false)
	const [isServerError, setIsServerError] = useState(false)

	const params = useParams()

	const onAddPathDataTaskImageToMongoDb = (
		uploadResult: string | CloudinaryUploadWidgetInfo | undefined
	) => {
		const pathDataTask = `https://res.cloudinary.com/dakehatrn/image/upload/${uploadResult}`

		const data = {
			dataImage: pathDataTask,
			id: params?.slug
		}

		updateDataTask(data)
	}

	const { mutate: updateDataTask, isPending } = useMutation({
		mutationFn: (updatedTask: any) => {
			return axios.post('/api/tasks/upload-data', updatedTask)
		},
		onSuccess: () => {
			setIsSuccess(true)
			togglePageScrolling()
		},
		onError: error => {
			console.error(error)
			togglePageScrolling()
			getStatus(error)
		}
	})

	const getStatus = (error: any) => {
		const statusError = error.request.status

		if (statusError === 500) {
			setIsServerError(true)
		}
	}

	return (
		<>
			{isPending && <UiLoader />}
			<div>
				<p className='mb-3 pl-3 font-play700 text-app-white'>
					Добавить данные для построений
				</p>
				<div className='flex flex-col justify-between gap-4'>
					<CldUploadButton
						className='flex flex-1 items-center justify-center gap-2 rounded-2xl bg-app-green px-3 py-5 font-play700'
						onSuccess={results =>
							onAddPathDataTaskImageToMongoDb(results?.info?.path)
						}
						uploadPreset={uploadPreset}
					>
						Опубликовать
						<span className='-rotate-90'>
							<LogoutSvgComponent />
						</span>
					</CldUploadButton>
				</div>
				{isSuccess && (
					<UiSuccessMessage
						message='Данные добавлены'
						handleClose={() => {
							togglePageScrolling()
							setIsSuccess(false)
						}}
					/>
				)}
				{isServerError && (
					<UiErrorMessage
						message='Что-то пошло не так. Пожалуйста, попробуйте еще раз'
						handleClose={() => {
							togglePageScrolling()
							setIsServerError(false)
						}}
					/>
				)}
			</div>
		</>
	)
}
