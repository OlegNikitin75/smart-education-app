import db from '../lib/db'

export const getAllTeachers = async () => {
	const response = await db.user.findMany({
		where: { role: 'TEACHER' },
		select: {
			id: true,
			firstName: true,
			middleName: true,
			lastName: true,
			post: true,
			password: true,
			login: true
		},
		orderBy: {
			lastName: 'asc'
		}
	})
	return response
}
