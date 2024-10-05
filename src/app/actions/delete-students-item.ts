import { NAVIGATION } from '@/shared/constants/navigation'
import { revalidatePath } from 'next/cache'
import db from '../lib/db'

export const deleteStudentsItem = async (id: string) => {
	'use server'

	const response = await db.user.deleteMany({
		where: { id: id }
	})
	revalidatePath(NAVIGATION.admin_students)
	return response
}