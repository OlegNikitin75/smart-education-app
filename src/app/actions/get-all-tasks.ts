import db from '../lib/db'

export const getAllTasks = async (id: string) => {
	const response = await db.course.findMany({
		where: {
			id: id
		},
		select: {
			id: true,
			tasks: true,
			graphicWorks: true,
			verificationWorks: true
		},
		orderBy: {
		}
	})
	return response
}
