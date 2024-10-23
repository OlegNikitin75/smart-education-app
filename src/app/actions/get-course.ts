import db from '../lib/db'

export const getCourse = async (id: string) => {
	const response = await db.course.findFirst({
		where: {
			id: id
		},
		select: {
			id: true,
			name: true
		}
	})
	return response
}
