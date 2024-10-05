import { NextRequestWithAuth, withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { NAVIGATION } from './src/shared/constants/navigation'

export default withAuth(
	function middleware(request: NextRequestWithAuth) {
		if (
			request.nextauth.token?.user.role !== 'ADMIN' &&
			request.nextUrl.pathname.startsWith('/admin')
		) {
			return NextResponse.redirect(
				new URL(NAVIGATION.access_denied, request.url)
			)
		}

	},
	{
		callbacks: {
			authorized: ({ token }) => !!token
		}
	} 
)
export const config = {
	matcher: [
		'/admin',
		'/admin/teachers',
		'/admin/students',
		'/admin/courses',
		'/admin/groups',
		'/admin/profile',
		'/admin/admins',
		'/admin/teachers/select',
		'/admin/groups/register',
		'/admin/teachers/register',
		'/admin/admins/register',
		'/admin/students/register',
		'/admin/courses/register'
	]
}
//Для входа в приложение при отсутствии в базе пользователей разкомментировать и сделать запрос /home  в адресной строке
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/admin/admins/register', request.url))
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/home',
// }