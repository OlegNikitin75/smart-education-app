import db from '@/app/lib/db'
import { ICreateUserData } from '@/shared/types'
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	try {
		const {
			firstName,
			middleName,
			lastName,
			role,
			post,
			login,
			password,
		}: ICreateUserData = await request.json()

		const existingUser = await db.user.findFirst({
			where: {
				AND: [
					{ firstName: { equals: firstName } },
					{ middleName: { equals: middleName } },
					{ lastName: { equals: lastName } },
					{ role: { equals: role } }
				]
			}
		})
		if (existingUser) {
			return NextResponse.json(
				{
					data: null,
					message: 'Такой преподаватель уже существует'
				},
				{ status: 409 }
			)
		}
		const hashedPassword = await bcrypt.hash(password, 10)
		
		const newUser = await db.user.create({
		
			data: {
				firstName,
				middleName,
				lastName,
				role,
				post,
				login,
				password,
				hashedPassword,
			}
		})

		return NextResponse.json(
			{
				data: newUser,
				message: 'Преподаватель успешно создан'
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
