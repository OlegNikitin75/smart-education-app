import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import authOptions from '@/app/lib/authOption'
import { getAllAdmins } from '@/app/actions/get-all-admins'
import { deleteAdminsItem } from '@/app/actions/delete-admins-item'
import { NAVIGATION } from '@/shared/constants/navigation'
import { AdminPageLayout } from '@/shared/ui/layouts'
import { UsersSvgComponent } from '@/shared/icons'
import { UserCard } from '@/entities/card-user'
import {
	UiContainer,
	UiHeader,
	UiHeading,
	UiLeftBlockHeader,
	UiLink,
	UiListEmpty
} from '@/shared/ui'
import { AccessDenied } from '@/pages/access-denied-page'

export const AdminAdminsPage = async () => {
	const session = await getServerSession(authOptions)
	const dataAdmins = await getAllAdmins()

	if (!session) redirect(NAVIGATION.main)

	if (session.user.role !== 'ADMIN') return <AccessDenied />

	return (
		<AdminPageLayout
			header={
				<UiHeader
					leftBlock={<UiLeftBlockHeader />}
					middleBlock={
						<UiHeading tag='h3' className='centerPosition'>
							Администраторы
						</UiHeading>
					}
				/>
			}
		>
				<div className='flex h-full flex-col justify-between py-5'>
					{dataAdmins.length === 0 && (
						<UiListEmpty
							image={<UsersSvgComponent />}
							message={
								<UiHeading tag='h2' className='uppercase text-app-white'>
									Здесь пока никого нет
								</UiHeading>
							}
							desc={
								<p className='text-app-light-gray'>
									Нажмите на кнопку ниже, чтобы добавить нового администратора
								</p>
							}
						/>
					)}

					<ul className='flex flex-col gap-4 overflow-scroll pb-5'>
						{dataAdmins?.map(admin => (
							<UserCard
								key={admin.id}
								data={admin}
								deleteItems={deleteAdminsItem}
							/>
						))}
					</ul>

					<UiLink variant='add' href={NAVIGATION.admin_register_admin}>
						Добавить администратора
					</UiLink>
				</div>
		</AdminPageLayout>
	)
}
