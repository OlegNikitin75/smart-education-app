import db from '../lib/db'

export const getAllGroups = async () => {
	const response = await db.group.findMany({
		select: {
			id: true,
			title: true
		},
		orderBy: {
			title: 'asc'
		}
	})
	return response
}