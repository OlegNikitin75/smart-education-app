import db from '../lib/db'

export const getAllStudents = async () => {
	const response = await db.user.findMany({
		where: { role: 'STUDENT' },
		select: {
			id: true,
			firstName: true,
			middleName: true,
			lastName: true,
			role: true,
			login: true,
			password: true,
			groups: { select: { title: true } }
		},
		orderBy: [
			{
				lastName: 'asc'
			}
		]
	})
	return response
}
