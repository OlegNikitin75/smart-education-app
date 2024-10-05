import db from '../lib/db'

export const getAllCourses = async () => {
	const response = await db.course.findMany({
		select: {
			id: true,
			name: true,
			color: true,
			image: true,
			faculty: true,
			semester: true
		},
		orderBy: {
			name: 'asc'
		}
	})
	return response
}
