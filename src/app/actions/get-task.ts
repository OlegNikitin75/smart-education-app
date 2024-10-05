import db from '../lib/db'

export const getTask = async (slug: string) => {
	const response = await db.task.findFirst({
		where: {
			id: slug
		},
		select: {
			id: true,
			label: true
		}
	})
	return response
}