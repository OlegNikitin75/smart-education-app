'use client'
import { LogoutSvgComponent } from '@/shared/icons'
import { togglePageScrolling } from '@/shared/libs/common'
import { UiErrorMessage, UiLoader, UiSuccessMessage } from '@/shared/ui'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { CldUploadButton, CloudinaryUploadWidgetInfo } from 'next-cloudinary'
import { useParams } from 'next/navigation'
import { useState } from 'react'

export const UploadExampleTaskFile = () => {
	const uploadPreset = 'q485uwn9'

	const [isSuccess, setIsSuccess] = useState(false)
	const [isServerError, setIsServerError] = useState(false)

	const params = useParams()

	const onAddPathExampleTaskImageToMongoDb = (
		uploadResult: string | CloudinaryUploadWidgetInfo | undefined
	) => {
		const pathExampleTaskImage = `https://res.cloudinary.com/dakehatrn/image/upload/${uploadResult}`

		const data = {
			exampleImage: pathExampleTaskImage,
			id: params?.slug
		}

		updateDataTask(data)
	}

	const { mutate: updateDataTask, isPending } = useMutation({
		mutationFn: (updatedTask: any) => {
			return axios.post('/api/tasks/upload-example', updatedTask)
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
					Добавить пример выполнения
				</p>
				<div className='flex flex-col justify-between gap-4'>
					<CldUploadButton
						className='flex flex-1 items-center justify-center gap-2 rounded-2xl bg-app-white px-3 py-5 font-play700'
						onSuccess={results =>
							onAddPathExampleTaskImageToMongoDb(results?.info?.path)
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
						message='Пример выполнения добавлен'
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
