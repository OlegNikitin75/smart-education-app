'use client'
import { togglePageScrolling } from '@/shared/libs/common'
import { IRegisterGroupData } from '@/shared/types'
import {
	UiButton,
	UiErrorMessage,
	UiInput,
	UiLoader,
	UiSuccessMessage
} from '@/shared/ui'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export interface ITaskDataUrls {
	taskUrl: string
	exampleUrl: string
	id: string | string[] | undefined
}

export const UploadDataTaskUrl = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<ITaskDataUrls>({
		mode: 'all'
	})
	const params = useParams()
	const router = useRouter()
	const [isSuccess, setIsSuccess] = useState(false)
	const [isServerError, setIsServerError] = useState(false)
	const submit: SubmitHandler<ITaskDataUrls> = data => {
		data.id = params?.slug
		console.log(data)
		updatedTask(data)
	}
	const { mutate: updatedTask, isPending } = useMutation({
		mutationFn: (updatedTask: ITaskDataUrls) => {
			return axios.post('/api/tasks/upload-data-task-url', updatedTask)
		},

		onSuccess: () => {
			setIsSuccess(true)
			reset()
			router.refresh()
		},
		onError: error => {
			console.error(error)
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
			<form
				onSubmit={handleSubmit(submit)}
				className='flex h-full flex-col gap-4 justify-between'
			>
				<div className='space-y-6'>
					<div>
						<UiInput
							label='Ссылка на задание'
							error={errors?.taskUrl}
							variant='secondary'
							inputProps={{
								placeholder: 'https://www.google.com/',
								type: 'text',
								...register('taskUrl', { required: 'Это поле обязательно' })
							}}
						/>
						{errors.taskUrl?.message && (
							<p className='flex items-center gap-2 p-1.5 font-play400 text-xs text-app-red'>
								{errors.taskUrl?.message}
							</p>
						)}
					</div>
					<div>
						<UiInput
							label='Ссылка на пример выполнения'
							error={errors?.exampleUrl}
							variant='secondary'
							inputProps={{
								placeholder: 'https://www.google.com/',
								type: 'text',
								...register('exampleUrl', { required: 'Это поле обязательно' })
							}}
						/>
						{errors.exampleUrl?.message && (
							<p className='flex items-center gap-2 p-1.5 font-play400 text-xs text-app-red'>
								{errors.exampleUrl?.message}
							</p>
						)}
					</div>
				</div>
				<UiButton variant='primary'>Добавить</UiButton>
			</form>
			{isSuccess && (
				<UiSuccessMessage
					message='Данные задания обновлены'
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
		</>
	)
}
