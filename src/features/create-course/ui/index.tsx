'use client'
import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { CardCourse } from '@/entities/card-course'
import { COLORS } from '@/shared/constants/colors'
import { IMAGES } from '@/shared/constants/images'
import { togglePageScrolling } from '@/shared/libs/common'
import { ICreateCourseData } from '@/shared/types'
import {
	UiButton,
	UiErrorMessage,
	UiInput,
	UiLoader,
	UiRadio,
	UiSuccessMessage
} from '@/shared/ui'

export const CreateCourse = () => {
	const [title, setTitle] = useState('Инженерная графика')
	const [faculty, setFaculty] = useState('ЭТ')
	const [color, setColor] = useState('bg-app-red')
	const [image, setImage] = useState("bg-[url('/img/bg_course_1.png')]")
	const [task, setTask] = useState('11')
	const [works, setWorks] = useState('2')
	const [semester, setSemester] = useState('1 семестр')
	const [isSuccess, setIsSuccess] = useState(false)
	const [isServerError, setIsServerError] = useState(false)

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors }
	} = useForm<ICreateCourseData>({
		defaultValues: {
			color: color,
			image: image
		}
	})

	const router = useRouter()

	const handleColorClick = (color: string) => {
		setColor(color)
		setValue('color', color)
	}
	const handleImageClick = (image: string) => {
		setImage(image)
		setValue('image', image)
	}

	const onSubmit: SubmitHandler<ICreateCourseData> = async data => {
		createCourse(data)
	}

	const { mutate: createCourse, isPending } = useMutation({
		mutationFn: (newCourse: ICreateCourseData) => {
			return axios.post('/api/courses/create', newCourse)
		},

		onSuccess: () => {
			setIsSuccess(true)
			setFaculty('ЭТ')
			setTitle('Инженерная графика')
			setColor('bg-app-red')
			setImage("bg-[url('/img/bg_course_1.png')]")
			reset()
			router.refresh()
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
			<CardCourse
				title={title}
				color={color}
				image={image}
				faculty={faculty}
				numberTasks={task}
				numberWorks={works}
				semester={semester}
			/>
			<form
				className='flex h-[calc(100%-176px)] flex-col justify-between gap-6 pb-5'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='mt-6'>
					<UiInput
						variant='secondary'
						label='Введите название курса'
						error={errors?.name}
						inputProps={{
							placeholder: 'Например, Инженерная графика',
							type: 'text',
							...register('name', {
								required: 'Это поле обязательно',
								onChange: (e: ChangeEvent<HTMLInputElement>) =>
									setTitle(e.target.value)
							})
						}}
					/>
					{errors.name?.message && (
						<p className='gap-2 p-1.5 font-play400 text-xs text-app-red'>
							{errors.name?.message}
						</p>
					)}
				</div>

				<div>
					<UiInput
						variant='secondary'
						label='Введите название факультета'
						error={errors?.faculty}
						inputProps={{
							placeholder: 'Например, ЭТ',
							type: 'text',
							...register('faculty', {
								required: 'Это поле обязательно',
								onChange: (e: ChangeEvent<HTMLInputElement>) =>
									setFaculty(e.target.value)
							})
						}}
					/>
					{errors.faculty?.message && (
						<p className='p-1.5 font-play400 text-xs text-app-red'>
							{errors.faculty?.message}
						</p>
					)}
				</div>

				<div>
					<span className='mb-2 block pl-3 font-play700 text-app-white'>
						Выберите цвет фона
					</span>
					<ul className='flex justify-between'>
						{COLORS.map(color => (
							<li
								key={color.color}
								onClick={() => handleColorClick(color.styleName)}
								className={`${color.styleName} h-6 w-6 cursor-pointer rounded-full`}
							></li>
						))}
					</ul>
				</div>

				<div>
					<span className='mb-2 block pl-3 font-play700 text-app-white'>
						Выберите изображение фона
					</span>
					<div className=''>
						<ul className='flex flex-wrap gap-5'>
							{IMAGES.map(image => (
								<li
									key={image.id}
									onClick={() => handleImageClick(image.styleName)}
									className={`h-16 w-16 cursor-pointer rounded-md bg-app-white ${image.styleName} shrink-0 bg-cover bg-center bg-no-repeat`}
								></li>
							))}
						</ul>
					</div>
				</div>

				<div>
					<span className='mb-2 block pl-3 font-play700 text-app-white'>
						Выберите учебный семестр
					</span>
					<div className='flex justify-between gap-3'>
						<UiRadio
							classNameBlock='flex-1'
							variant='secondary'
							title='1 семестр'
							error={errors.semester}
							inputProps={{
								type: 'text',
								value: '1 семестр',
								...register('semester', {
									required: true,
									onChange: (e: ChangeEvent<HTMLInputElement>) =>
										setSemester(e.target.value)
								})
							}}
						/>
						<UiRadio
							classNameBlock='flex-1'
							variant='secondary'
							title='2 семестр'
							error={errors.semester}
							inputProps={{
								type: 'text',
								value: '2 семестр',
								...register('semester', {
									required: true,
									onChange: (e: ChangeEvent<HTMLInputElement>) =>
										setSemester(e.target.value)
								})
							}}
						/>
					</div>
				</div>

				<div>
					<div className='flex justify-between'>
						<div className='w-1/3 px-1'>
							<UiInput
								variant='numbers'
								label='ПЗ'
								error={errors?.numberOfTask}
								inputProps={{
									placeholder: '0',
									type: 'number',
									...register('numberOfTask', {
										required: true,
										onChange: (e: ChangeEvent<HTMLInputElement>) =>
											setTask(e.target.value)
									})
								}}
							/>
						</div>
						<div className='w-1/3 px-1'>
							<UiInput
								variant='numbers'
								label='РГР'
								error={errors?.numberOfGraphicWork}
								inputProps={{
									placeholder: '0',
									type: 'number',
									...register('numberOfGraphicWork', {
										required: true,
										onChange: (e: ChangeEvent<HTMLInputElement>) =>
											setWorks(e.target.value)
									})
								}}
							/>
						</div>
						<div className='w-1/3 px-1'>
							<UiInput
								variant='numbers'
								label='КР'
								error={errors?.numberOfVerificationWork}
								inputProps={{
									placeholder: '0',
									type: 'number',
									...register('numberOfVerificationWork', {
										required: true
									})
								}}
							/>
						</div>
						<div></div>
						<div></div>
					</div>
					{(errors?.numberOfTask ||
						errors?.numberOfGraphicWork ||
						errors?.numberOfVerificationWork) && (
						<p className='p-1.5 text-center font-play400 text-xs text-app-red'>
							Эти поля обязательны
						</p>
					)}
				</div>

				<UiInput
					className='hidden'
					inputProps={{
						type: 'hidden',
						...register('color')
					}}
				/>
				<UiInput
					className='hidden'
					inputProps={{
						type: 'hidden',
						...register('image')
					}}
				/>
				<div className='pb-5'>
					<UiButton
						onClick={() => window.scrollTo({ top: 0 })}
						variant='secondary'
						type='submit'
						className='mb-0 mt-auto'
					>
						Готово
					</UiButton>
				</div>
			</form>
			{isSuccess && (
				<UiSuccessMessage
					message='Курс успешно создан'
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
