import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { AdminPageLayout } from '@/shared/ui/layouts/admin-page-layout'
import authOptions from '@/app/lib/authOption'
import { NAVIGATION } from '@/shared/constants/navigation'
import { UiHeader, UiLink } from '@/shared/ui'
import { AccessDenied } from '@/pages/access-denied-page'
import { UserSvgComponent } from '@/shared/icons'

export const AdminHomePage = async () => {
	const session = await getServerSession(authOptions)

	if (!session) redirect(NAVIGATION.main)
	if (session.user.role !== 'ADMIN') return <AccessDenied />

	return (
		<AdminPageLayout
			header={
				<UiHeader
					leftBlock={
						<div>
							<UiLink
								className='flex items-center gap-4'
								variant='profile'
								href={NAVIGATION.admin_profile}
							>
								<UserSvgComponent color='#F8F9FA' />

								<span className='flex flex-col'>
									<span className='space-x-1'>
										<span>{session?.user?.firstName}</span>
										<span>{session?.user?.lastName}</span>
									</span>
									<span className='text-app-light-gray'>Администратор</span>
								</span>
							</UiLink>
						</div>
					}
				/>
			}
		>
			<div className='flex flex-col gap-4 py-5'>
				<UiLink variant='secondary' href={NAVIGATION.admin_courses}>
					Курсы
				</UiLink>
				<UiLink variant='secondary' href={NAVIGATION.admin_groups}>
					Группы
				</UiLink>
				<UiLink variant='secondary' href={NAVIGATION.admin_teachers}>
					Преподаватели
				</UiLink>
				<UiLink variant='secondary' href={NAVIGATION.admin_students}>
					Студенты
				</UiLink>
				<UiLink variant='secondary' href={NAVIGATION.admin_admins}>
					Администраторы
				</UiLink>
			</div>
		</AdminPageLayout>
	)
}
