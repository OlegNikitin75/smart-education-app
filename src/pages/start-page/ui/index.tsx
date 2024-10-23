import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import authOptions from '@/app/lib/authOption'
import { NAVIGATION } from '@/shared/constants/navigation'
import { UiLink } from '@/shared/ui'

export const StartPage = async () => {
	const session = await getServerSession(authOptions)

	const sessionUserRole = session?.user.role

	if (!session) redirect(NAVIGATION.main)

	return (
		<main className='relative mx-auto h-full w-full max-w-md px-3 py-5 lg:h-[90%]'>
			<div className='flex h-full flex-col justify-end'>
				<div>
					<h4 className='mb-52 text-center font-play700 text-4xl text-app-white'>
						{session.user.firstName} {session.user.lastName}
						{sessionUserRole === 'ADMIN' && (
							<span className='block py-2 font-play400 text-xl'>
								Администратор
							</span>
						)}
						{sessionUserRole === 'STUDENT' && (
							<span className='block py-2 font-play400 text-xl'>
								Студент
							</span>
						)}
						{sessionUserRole === 'TEACHER' && (
							<span className='block py-2 font-play400 text-xl'>
								Преподаватель
							</span>
						)}
					</h4>

					{sessionUserRole === 'ADMIN' && (
						<UiLink href={NAVIGATION.admin} variant='primary'>
							Продолжить
						</UiLink>
					)}
					{sessionUserRole === 'TEACHER' && (
						<UiLink href={NAVIGATION.app} variant='primary'>
							Продолжить
						</UiLink>
					)}
					{sessionUserRole === 'STUDENT' && (
						<UiLink href={NAVIGATION.app} variant='primary'>
							Продолжить
						</UiLink>
					)}
				</div>
			</div>
		</main>
	)
}
