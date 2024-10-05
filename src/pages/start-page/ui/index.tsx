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
		<main className='relative mx-auto h-full w-full max-w-md overflow-hidden border-zinc-400 bg-[url("/img/bg-main-page.png")] bg-cover bg-top bg-no-repeat px-3 py-5 lg:h-[90%] lg:rounded-[40px] lg:border-4 lg:py-6 lg:shadow-xl lg:shadow-slate-400'>
			<div className='flex h-full flex-col justify-end'>
				<div>
					<h4 className='mb-52 text-center font-play700 text-4xl'>
						{session.user.firstName} {session.user.lastName}
						<span className='block py-2 font-play400 text-xl'>
							добро пожаловать в приложение!
						</span>
					</h4>

					{sessionUserRole === 'ADMIN' && (
						<UiLink href={NAVIGATION.admin} variant='primary'>
							Продолжить работу
						</UiLink>
					)}
					{sessionUserRole === 'TEACHER' && (
						<UiLink href={NAVIGATION.app} variant='primary'>
							Продолжить работу
						</UiLink>
					)}
					{sessionUserRole === 'STUDENT' && (
						<UiLink href={NAVIGATION.app} variant='primary'>
							Продолжить работу
						</UiLink>
					)}
				</div>
			</div>
		</main>
	)
}
