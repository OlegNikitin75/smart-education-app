import db from '../lib/db'

export const getAllAdmins = async () => {
	const response = await db.user.findMany({
		where: { role: 'ADMIN' },
		select: {
			id: true,
			firstName: true,
			middleName: true,
			lastName: true,
			password: true,
			login: true
		},
		orderBy: {
			lastName: 'asc'
		}
	})
	return response
}