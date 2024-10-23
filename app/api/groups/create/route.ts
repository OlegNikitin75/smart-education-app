import db from '@/app/lib/db'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	try {
		const { title } = await request.json()

		const existingGroup = await db.group.findFirst({
			where: {
				title
			}
		})
		if (existingGroup) {
			return NextResponse.json(
				{
					data: null,
					message: 'Такая группа в базе данных уже существует'
				},
				{ status: 409 }
			)
		}
		const newGroup = await db.group.create({
			data: {
				title
			}
		})

		return NextResponse.json(
			{
				data: newGroup,
				message: 'Группа успешно создана'
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
