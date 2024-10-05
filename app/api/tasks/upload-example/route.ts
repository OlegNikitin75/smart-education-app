import db from '@/app/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	try {
		const { id, exampleImage } = await request.json()


		const updatedTask = await db.task.update({
			where: {
				id: id
			},

			data: {
				exampleImageUrl: exampleImage
			}
		})

		return NextResponse.json(
			{
				data: updatedTask,
				message: 'Задание обновлено'
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
