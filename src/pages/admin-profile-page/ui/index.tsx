import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import authOptions from '@/app/lib/authOption'
import { NAVIGATION } from '@/shared/constants/navigation'
import { UiAdminFooter, UiContainer, UiHeader, UiHeading, UiLeftBlockHeader } from '@/shared/ui'
import { AdminPageLayout } from '@/shared/ui/layouts/admin-page-layout'
import { AdminSvgComponent } from '@/shared/icons'
import { UpdateAdminProfile } from '@/features/update-admin-profile'
import { Logout } from '@/features/logout'
import { AccessDenied } from '@/pages/access-denied-page'

export const AdminProfilePage = async () => {
	const session = await getServerSession(authOptions)

	if (!session) redirect(NAVIGATION.main)
	if (session.user.role !== 'ADMIN') return <AccessDenied />

	return (
		<AdminPageLayout
			header={
				<UiHeader
				leftBlock={<UiLeftBlockHeader />}
					middleBlock={
						<UiHeading tag='h3' className='centerPosition'>
							Ваш профиль
						</UiHeading>
					}
				/>
			}
			footer={<UiAdminFooter />}
		>
			<div className='flex h-full flex-col justify-between py-5'>
				<div className='mb-6 flex items-center justify-center gap-12 text-app-light-gray'>
					<AdminSvgComponent />
					<div className='flex flex-col gap-2'>
						<span className='font-play400 text-2xl'>
							{session?.user?.lastName}
						</span>
						<span className='font-play400 text-2xl'>
							{session?.user?.firstName}
						</span>
						<span className='font-play400 text-2xl'>
							{session?.user?.middleName}
						</span>
					</div>
				</div>
				<UpdateAdminProfile id={session?.user?.id} />
				<div>
					<Logout />
				</div>
			</div>
		</AdminPageLayout>
	)
}
