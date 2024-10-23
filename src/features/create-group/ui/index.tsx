'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { IRegisterGroupData } from '@/shared/types'
import {
	UiButton,
	UiErrorMessage,
	UiInput,
	UiLoader,
	UiSuccessMessage
} from '@/shared/ui'

export const CreateGroup = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IRegisterGroupData>({
		mode: 'all'
	})
	const [isSuccess, setIsSuccess] = useState(false)
	const [isError, setIsError] = useState(false)
	const [isServerError, setIsServerError] = useState(false)

	const router = useRouter()

	const submit: SubmitHandler<IRegisterGroupData> = data => {
		createGroup(data)
	}

	const { mutate: createGroup, isPending } = useMutation({
		mutationFn: (newGroup: IRegisterGroupData) => {
			return axios.post('/api/groups/create', newGroup)
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
		if (statusError === 409) {
			setIsError(true)
		}
		if (statusError === 500) {
			setIsServerError(true)
		}
	}

	return (
		<>
			{isPending && <UiLoader />}
			<form
				className='flex h-full flex-col justify-between space-y-8 py-5 pt-7'
				onSubmit={handleSubmit(submit)}
			>
				<div>
					<UiInput
						variant='secondary'
						label='Введите название группы'
						error={errors?.title}
						inputProps={{
							placeholder: 'Например, МО-11',
							type: 'text',
							...register('title', {
								pattern: {
									value: /[А-Я]-[0-9]/,
									message: 'Неверный формат названия группы'
								},
								required: 'Это поле обязательно'
							})
						}}
					/>
					{errors.title?.message && (
						<p className='flex items-center gap-2 p-1.5 font-play400 text-xs text-app-red'>
							{errors.title?.message}
						</p>
					)}
				</div>

				<UiButton variant='primary' type='submit'>
					Готово
				</UiButton>
			</form>
			{isSuccess && (
				<UiSuccessMessage
					message='Новая группа успешно создана'
					handleClose={() => setIsSuccess(false)}
				/>
			)}
			{isError && (
				<UiErrorMessage
					message='Такая группа уже существует'
					handleClose={() => setIsError(false)}
				/>
			)}
			{isServerError && (
				<UiErrorMessage
					message='Что-то пошло не так. Пожалуйста, попробуйте еще раз'
					handleClose={() => setIsServerError(false)}
				/>
			)}
		</>
	)
}
