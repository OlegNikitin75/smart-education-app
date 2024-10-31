'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import {
	EyeSlashSvgComponent,
	EyeSvgComponent,
	LockSvgComponent,
	UserSvgComponent
} from '@/shared/icons'
import { UiButton, UiButtonWithIcon, UiErrorMessage, UiIconButton, UiInput, UiLoader } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import { NAVIGATION } from '@/shared/constants/navigation'

export interface ILoginData {
	login: string
	password: string
}

export const Login = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [currentType, setCurrentType] = useState('password')
	const [loading, setLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [isServerError, setIsServerError] = useState(false)

	const handleClick = () => {
		setShowPassword(!showPassword)
		console.log(showPassword)
		currentType === 'password'
			? setCurrentType('text')
			: setCurrentType('password')
	}
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
				<div className='relative'>
					<UiInput
						icon={<LockSvgComponent color='#6C757D' />}
						label='Пароль'
						error={errors?.password}
						inputProps={{
							placeholder: '********',
							type: currentType,
							...register('password', { required: 'Это поле обязательно' })
						}}
					/>
					{errors.login?.message && (
						<p className='flex items-center gap-2 p-1.5 font-play400 text-xs text-app-red'>
							{errors.login?.message}
						</p>
					)}

					{
						showPassword
					}
					<UiIconButton
						onClick={handleClick}
						type='button'
						variant='basic'
						className='absolute right-4 top-1/2'
					>
						{showPassword ? <EyeSvgComponent /> : <EyeSlashSvgComponent />}
					</UiIconButton>
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
