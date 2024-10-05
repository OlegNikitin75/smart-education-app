import { revalidatePath } from 'next/cache'
import { NAVIGATION } from '@/shared/constants/navigation'
import db from '../lib/db'

export const deleteGroupsItem = async (id: string) => {
	'use server'
	const response = await db.group.delete({
		where: { id: id }
	})
	revalidatePath(NAVIGATION.admin_groups)
	return response
}
