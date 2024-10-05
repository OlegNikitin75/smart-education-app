import db from '@/app/lib/db'
import { ICreateCourseData } from '@/shared/types'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	try {
		const {
			color,
			faculty,
			image,
			name,
			numberOfGraphicWork,
			numberOfTask,
			numberOfVerificationWork,
			semester
		}: ICreateCourseData = await request.json()

		const tasks = Array.from({ length: Number(numberOfTask) }).map(
			(_, index) => ({
				label: `Лист ${index + 1}`,
				description: '',
				isPassed: false
			})
		)
		const graphicWorks = Array.from({
			length: Number(numberOfGraphicWork)
		}).map((_, index) => ({
			label: `РГР ${index + 1}`,
			title: '',
			isPassed: false
		}))
		const verificationWorks = Array.from({
			length: Number(numberOfVerificationWork)
		}).map((_, index) => ({
			label: `КР ${index + 1}`,
			score: ''
		}))
		const newCourse = await db.course.create({
			data: {
				name,
				faculty,
				color,
				image,
				semester,
				numberOfTask,
				numberOfGraphicWork,
				numberOfVerificationWork,
				tasks: { create: tasks },
				graphicWorks: { create: graphicWorks },
				verificationWorks: { create: verificationWorks }
			}
		})

		return NextResponse.json(
			{
				data: newCourse,
				message: 'Курс успешно создан'
			},
			{ status: 201 }
		)
	} catch (error) {
		console.log(error)
		return NextResponse.json(
			{
				error,
				message: 'Ошибка сервера: Что-то пошло не так'
			},
			{ status: 500 }
		)
	}
}
