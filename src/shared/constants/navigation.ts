export const NAVIGATION = {
	//main paths---------------------------
	main: '/',
	start: '/start',
	//auth paths---------------------------
	register: '/register',
	register_teachers: '/register-teachers',
	register_deanery: '/register-deanery',
	login: '/login',
	access_denied: '/access-denied',
	//app paths----------------------------
	app: '/app',
	app_schedule: '/app/schedule',
	app_courses: '/app/courses',
	app_profile: '/app/profile',
	// admin paths-------------------------
	admin: '/admin',
	admin_profile: '/admin/profile',
	admin_courses: '/admin/courses',
	admin_groups: '/admin/groups',
	admin_teachers: '/admin/teachers',
	admin_admins: '/admin/admins',
	admin_select_teachers: '/admin/teachers/select',
	admin_students: '/admin/students',
	admin_register_group: '/admin/groups/register',
	admin_register_teacher: '/admin/teachers/register',
	admin_register_admin: '/admin/admins/register',
	admin_register_student: '/admin/students/register',
	admin_register_courses: '/admin/courses/register'
} as const
