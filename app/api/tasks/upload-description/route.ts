import { NextRequest, NextResponse } from 'next/server'
import db from '@/app/lib/db'

export async function POST(request: NextRequest) {
	try {
		const { id, description } = await request.json()

		const updatedTask = await db.task.update({
			where: {
				id: id
			},

			data: {
				description: description
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
