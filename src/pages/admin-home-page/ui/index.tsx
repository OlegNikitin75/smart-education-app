import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { AdminPageLayout } from '@/shared/ui/layouts/admin-page-layout'
import authOptions from '@/app/lib/authOption'
import { NAVIGATION } from '@/shared/constants/navigation'
import { UiAdminFooter, UiHeader, UiHeading, UiLink } from '@/shared/ui'
import { AccessDenied } from '@/pages/access-denied-page'


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
							<UiHeading tag='h3' className='space-x-2'>
								<span>{session?.user?.firstName}</span>
								<span>{session?.user?.lastName}</span>
							</UiHeading>
							<p className='text-app-light-gray'>Администратор</p>
						</div>
					}
				/>
			}
			footer={<UiAdminFooter />}
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
