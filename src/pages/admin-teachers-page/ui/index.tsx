import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import authOptions from '@/app/lib/authOption'
import { getAllTeachers } from '@/app/actions/get-all-teachers'
import { deleteTeachersItem } from '@/app/actions/delete-teachers-item'
import { UserCard } from '@/entities/card-user'
import { AdminPageLayout } from '@/shared/ui/layouts'
import { NAVIGATION } from '@/shared/constants/navigation'
import { UsersSvgComponent } from '@/shared/icons'
import {
	UiContainer,
	UiHeader,
	UiHeading,
	UiLeftBlockHeader,
	UiLink,
	UiListEmpty
} from '@/shared/ui'
import { AccessDenied } from '@/pages/access-denied-page'

export const AdminTeachersPage = async () => {
	const session = await getServerSession(authOptions)

	if (!session) redirect(NAVIGATION.main)
	if (session.user.role !== 'ADMIN') return <AccessDenied />

	const dataTeachers = await getAllTeachers()
	return (
		<AdminPageLayout
			header={
				<UiHeader
					leftBlock={<UiLeftBlockHeader />}
					middleBlock={
						<UiHeading tag='h3' className='centerPosition'>
							Преподаватели
						</UiHeading>
					}
				/>
			}
		>
				<div className='flex h-full flex-col justify-between py-5'>
					{dataTeachers.length === 0 && (
						<UiListEmpty
							image={<UsersSvgComponent />}
							message={
								<UiHeading tag='h2' className='uppercase text-app-white'>
									Здесь пока никого нет
								</UiHeading>
							}
							desc={
								<p className='text-app-light-gray'>
									Нажмите на кнопку ниже, чтобы добавить преподавателя
								</p>
							}
						/>
					)}

					<ul className='flex flex-col gap-4 overflow-scroll pb-5'>
						{dataTeachers?.map(teacher => (
							<UserCard
								key={teacher.id}
								data={teacher}
								deleteItems={deleteTeachersItem}
							/>
						))}
					</ul>

					<UiLink variant='add' href={NAVIGATION.admin_register_teacher}>
						Добавить преподавателя
					</UiLink>
				</div>
		</AdminPageLayout>
	)
}
