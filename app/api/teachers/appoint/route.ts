import { NextRequest, NextResponse } from 'next/server'
import db from '@/app/lib/db'

export async function POST(request: NextRequest) {
	try {
		const { teachersIDs, group } = await request.json()
		//console.log(teachersIDs, group)

		const updatedTeacher = await db.teacher.update({
			where: {
				id: teachersIDs
			},

			data: {
				group: { connect: { title: group } }
			}
		})

		return NextResponse.json(
			{
				data: updatedTeacher,
				message: 'Преподаватель добавлен'
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
