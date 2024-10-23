'use client'

import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { ITaskDescriptionData } from '@/shared/types'
import {
	UiErrorMessage,
	UiLoader,
	UiSuccessMessage,
	UiTiptap
} from '@/shared/ui'
import { FC, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { togglePageScrolling } from '@/shared/libs/common'

export const AddTaskDescription = () => {
	const { handleSubmit,reset } = useForm<ITaskDescriptionData>({
		mode: 'all'
	})
	const params = useParams()

	const [content, setContent] = useState('')
	const handleContentChange = (reason: string) => {
		setContent(reason)
	}

	const [isSuccess, setIsSuccess] = useState(false)
	const [isServerError, setIsServerError] = useState(false)

	const submit: SubmitHandler<ITaskDescriptionData> = data => {
		data.id = params?.slug
		data.description = content
		updateTaskDescription(data)
	}

	const { mutate: updateTaskDescription, isPending } = useMutation({
		mutationFn: (updatedTask: ITaskDescriptionData) => {
			return axios.post('/api/tasks/upload-description', updatedTask)
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

			<form onSubmit={handleSubmit(submit)}>
				<UiTiptap
					content={content}
					onChange={(newContent: string) => handleContentChange(newContent)}
				/>
			</form>
			{isSuccess && (
				<UiSuccessMessage
					message='Описание задачи добавлено'
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
