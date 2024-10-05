import { revalidatePath } from 'next/cache'
import db from '../lib/db'
import { NAVIGATION } from '@/shared/constants/navigation'

export const deleteTeachersItem = async (id: string) => {
	'use server'
	const response = await db.user.delete({
		where: { id: id }
	})
	revalidatePath(NAVIGATION.admin_teachers)
	return response
}
