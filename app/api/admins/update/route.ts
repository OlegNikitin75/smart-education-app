import { NextRequest, NextResponse } from 'next/server'
import db from '@/app/lib/db'
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {
	try {
		const { id, login, password } = await request.json()

		const hashedPassword = await bcrypt.hash(password, 10)

		const updatedUser = await db.user.update({
			where: {
				id: id
			},

			data: {
				login,
				password,
				hashedPassword
			}
		})

		return NextResponse.json(
			{
				data: updatedUser,
				message: 'Данные обновлены'
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
