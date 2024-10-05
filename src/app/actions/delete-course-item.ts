import { revalidatePath } from 'next/cache'
import { NAVIGATION } from '@/shared/constants/navigation'
import db from '../lib/db'

export const deleteCoursesItem = async (id: string) => {
	'use server'
	const response = await db.course.delete({
		where: { id: id }
	})
	revalidatePath(NAVIGATION.admin_courses)
	return response
}