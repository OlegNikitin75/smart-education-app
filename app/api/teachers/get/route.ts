import db from '@/app/lib/db'
import { NextResponse } from 'next/server'

export const GET = async () => {
	try {
		const teachers = await db.teacher.findMany()
		return NextResponse.json(teachers, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{ message: 'Ошибка загрузки данных преподавателей' },
			{ status: 200 }
		)
	}
}
