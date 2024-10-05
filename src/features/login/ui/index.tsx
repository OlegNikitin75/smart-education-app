'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { LockSvgComponent, UserSvgComponent } from '@/shared/icons'
import { UiButton, UiErrorMessage, UiInput, UiLoader } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import { NAVIGATION } from '@/shared/constants/navigation'

interface ILoginData {
	login: string
	password: string
}

export const Login = () => {
	const [loading, setLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [isServerError, setIsServerError] = useState(false)
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<ILoginData>({
		mode: 'all'
	})
	const router = useRouter()

	const submit: SubmitHandler<ILoginData> = async data => {
		try {
			setLoading(true)
			const loginData = await signIn('credentials', {
				...data,
				redirect: false
			})
			if (loginData?.error) {
				setLoading(false)
				setIsError(true)
			} else {
				router.push(NAVIGATION.start)
				reset()
			}
		} catch (error) {
			setLoading(false)
			setIsServerError(true)
			console.error('Ошибка сети', error)
		}
	}

	return (
		<>
			{loading && <UiLoader />}
			<form onSubmit={handleSubmit(submit)} className='space-y-8'>
				<div>
					<UiInput
						icon={<UserSvgComponent color='#6C757D' />}
						label='Логин'
						error={errors?.login}
						inputProps={{
							placeholder: 'smart.education',
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
						icon={<LockSvgComponent color='#6C757D' />}
						label='Пароль'
						error={errors?.password}
						inputProps={{
							placeholder: '********',
							type: 'password',
							...register('password', { required: 'Это поле обязательно' })
						}}
					/>
					{errors.login?.message && (
						<p className='flex items-center gap-2 p-1.5 font-play400 text-xs text-app-red'>
							{errors.login?.message}
						</p>
					)}
				</div>

				<UiButton variant='primary'>Войти</UiButton>
			</form>
			{isError && (
				<UiErrorMessage
					message='Ошибка авторизации. Проверьте учетные данные'
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
