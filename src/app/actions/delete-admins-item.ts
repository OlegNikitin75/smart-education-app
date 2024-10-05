import { NAVIGATION } from '@/shared/constants/navigation'
import { revalidatePath } from 'next/cache'
import db from '../lib/db'

export const deleteAdminsItem = async (id: string) => {
	'use server'
	const response = await db.user.delete({
		where: { id: id }
	})
	revalidatePath(NAVIGATION.admin_admins)
	return response
}
