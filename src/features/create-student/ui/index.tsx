'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { Role } from '@prisma/client'
import { togglePageScrolling } from '@/shared/libs/common'
import { loginGenerator } from '@/shared/libs/login-generator'
import { passwordGenerator } from '@/shared/libs/password-generator'
import { ICreateUserData } from '@/shared/types'
import {
	UiButton,
	UiErrorMessage,
	UiInput,
	UiLoader,
	UiSuccessMessage
} from '@/shared/ui'

export const CreateStudent = () => {
	const {
		register,
		handleSubmit,
		reset,
		getValues,
		setValue,
		formState: { errors }
	} = useForm<ICreateUserData>({
		mode: 'all'
	})
	const [isSuccess, setIsSuccess] = useState(false)
	const [isError, setIsError] = useState(false)
	const [isServerError, setIsServerError] = useState(false)

	const searchParams = useSearchParams()

	const titleGroup = searchParams?.get('title')

	const router = useRouter()

	const submit: SubmitHandler<ICreateUserData> = data => {
		data.role = Role.STUDENT
		if (titleGroup) {
			data.groups = titleGroup
		}
		createUser(data)
	}

	const { mutate: createUser, isPending } = useMutation({
		mutationFn: (newUser: ICreateUserData) => {
			return axios.post('/api/students/create', newUser)
		},

		onSuccess: () => {
			setIsSuccess(true)
			togglePageScrolling()
			reset()
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
		if (statusError === 409) {
			setIsError(true)
		}
		if (statusError === 500) {
			setIsServerError(true)
		}
	}

	const handleClick = () => {
		if (getValues('lastName')) {
			setValue('login', loginGenerator(getValues('lastName')))
			setValue('password', passwordGenerator())
		}
	}

	return (
		<>
			{isPending && <UiLoader />}
			<form
				className='flex h-full flex-col justify-between'
				onSubmit={handleSubmit(submit)}
			>
				<div>
					<UiInput
						variant='secondary'
						label='Имя студента'
						error={errors?.firstName}
						inputProps={{
							placeholder: 'Имя',
							type: 'text',
							...register('firstName', { required: 'Это поле обязательно' })
						}}
					/>
					{errors.firstName?.message && (
						<p className='flex items-center gap-2 p-1.5 font-play400 text-xs text-app-red'>
							{errors.firstName?.message}
						</p>
					)}
				</div>

				<div>
					<UiInput
						variant='secondary'
						label='Отчество студента'
						error={errors?.middleName}
						inputProps={{
							placeholder: 'Отчество',
							type: 'text',
							...register('middleName', { required: 'Это поле обязательно' })
						}}
					/>
					{errors.middleName?.message && (
						<p className='flex items-center gap-2 p-1.5 font-play400 text-xs text-app-red'>
							{errors.middleName?.message}
						</p>
					)}
				</div>
				<div>
					<UiInput
						variant='secondary'
						label='Фамилия студента'
						error={errors?.lastName}
						inputProps={{
							placeholder: 'Фамилия',
							type: 'text',
							...register('lastName', { required: 'Это поле обязательно' })
						}}
					/>
					{errors.lastName?.message && (
						<p className='flex items-center gap-2 p-1.5 font-play400 text-xs text-app-red'>
							{errors.lastName?.message}
						</p>
					)}
				</div>

				<div>
					<UiInput
						variant='secondary'
						label='Логин'
						error={errors?.login}
						inputProps={{
							placeholder: 'Логин',
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
						label='Пароль'
						error={errors?.password}
						inputProps={{
							placeholder: 'Пароль',
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

				<div className='space-y-6 pb-5'>
					<UiButton variant='primary' type='button' onClick={handleClick}>
						Сгенерировать логин и пароль
					</UiButton>

					<UiButton
						variant='secondary'
						type='submit'
						onClick={() => window.scrollTo({ top: 0 })}
					>
						Готово
					</UiButton>
				</div>
			</form>
			{isSuccess && (
				<UiSuccessMessage
					message='Студент успешно создан'
					handleClose={() => {
						togglePageScrolling()
						setIsSuccess(false)
					}}
				/>
			)}
			{isError && (
				<UiErrorMessage
					message='Такой пользователь уже существует'
					handleClose={() => {
						togglePageScrolling()
						setIsError(false)
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
