import db from '../lib/db'

export const getSheetTasks = async (id: string) => {
	const response = await db.task.findMany({
		where: {
			id: id
		},
		select: {
			id: true,
			label: true,
		},
		orderBy: {
			label:'asc'
		}
	})
	return response
}