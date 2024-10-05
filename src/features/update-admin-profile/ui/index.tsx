'use client'

import { togglePageScrolling } from '@/shared/libs/common'
import { ICreateUserData } from '@/shared/types'
import {
	UiLoader,
	UiInput,
	UiButton,
	UiSuccessMessage,
	UiErrorMessage,
	UiHeading
} from '@/shared/ui'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IUpdatedUserData {
	id: string
	login: string
	password: string
}

export const UpdateAdminProfile = ({ id }: { id: string }) => {
	const _id = id
	const {
		register,
		handleSubmit,
		reset,

		formState: { errors }
	} = useForm<IUpdatedUserData>({
		mode: 'all'
	})
	const [isSuccess, setIsSuccess] = useState(false)
	const [isServerError, setIsServerError] = useState(false)

	const router = useRouter()

	const submit: SubmitHandler<IUpdatedUserData> = data => {
		data.id = _id
		updateData(data)
	}

	const { mutate: updateData, isPending } = useMutation({
		mutationFn: (updatedUser: IUpdatedUserData) => {
			return axios.post('/api/admins/update', updatedUser)
		},

		onSuccess: () => {
			setIsSuccess(true)
			togglePageScrolling()
			router.refresh()
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
		<div>
			{isPending && <UiLoader />}
			<UiHeading tag='h3' className='mb-3 text-center text-app-white'>
				Изменить учетные данные?
			</UiHeading>
			<form
				className='flex flex-col gap-y-6 pb-5'
				onSubmit={handleSubmit(submit)}
			>
				<div>
					<UiInput
						variant='secondary'
						label='Новый логин'
						error={errors?.login}
						inputProps={{
							placeholder: 'Введите новый логин',
							type: 'text',
							...register('login', { required: 'Это поле обязательно' })
						}}
					/>
					{errors.login?.message && (
						<p className='flex items-center gap-2 p-1.5 font-play400 text-xs text-app-red'>
							{errors.login?.message}
						</p>
					)}
				</div>
				<div>
					<UiInput
						variant='secondary'
						label='Новый пароль'
						error={errors?.password}
						inputProps={{
							placeholder: 'Введите новый пароль',
							type: 'text',
							...register('password', { required: 'Это поле обязательно' })
						}}
					/>
					{errors.password?.message && (
						<p className='flex items-center gap-2 p-1.5 font-play400 text-xs text-app-red'>
							{errors.password?.message}
						</p>
					)}
				</div>

				<div className='mb-0 mt-auto pb-5'>
					<UiButton variant='primary' type='submit'>
						Изменить
					</UiButton>
				</div>
			</form>
			{isSuccess && (
				<UiSuccessMessage
					message='Профиль обновлен'
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
	)
}
