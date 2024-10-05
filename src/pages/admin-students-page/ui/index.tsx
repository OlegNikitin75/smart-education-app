import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import authOptions from '@/app/lib/authOption'
import { NAVIGATION } from '@/shared/constants/navigation'
import { deleteStudentsItem } from '@/app/actions/delete-students-item'
import { getAllStudents } from '@/app/actions/get-all-students'
import { AdminPageLayout } from '@/shared/ui/layouts'
import { UserCard } from '@/entities/card-user'
import { UsersSvgComponent } from '@/shared/icons'
import {
	UiContainer,
	UiHeader,
	UiHeading,
	UiLeftBlockHeader,
	UiListEmpty
} from '@/shared/ui'
import { AccessDenied } from '@/pages/access-denied-page'

export const AdminStudentsPage = async () => {
	const dataStudents = await getAllStudents()
	const session =await getServerSession(authOptions)

	if (!session) redirect(NAVIGATION.main)
	if (session.user.role !== 'ADMIN') return <AccessDenied />


	return (
		<AdminPageLayout
			header={
				<UiHeader
					leftBlock={<UiLeftBlockHeader />}
					middleBlock={
						<UiHeading tag='h3' className='centerPosition'>
							Студенты
						</UiHeading>
					}
				/>
			}
		>
			<UiContainer>
				<div className='flex h-full flex-col justify-between py-5'>
					{dataStudents.length === 0 && (
						<UiListEmpty
							image={<UsersSvgComponent />}
							message={
								<UiHeading tag='h2' className='text-app-white'>
									Здесь пока никого нет
								</UiHeading>
							}
						/>
					)}

					<ul className='flex flex-col gap-4 overflow-scroll pb-5'>
						{dataStudents.map((student, index) => (
							<UserCard
								key={student.id}
								data={student}
								groupTitle={dataStudents[index].groups[0].title}
								deleteItems={deleteStudentsItem}
							/>
						))}
					</ul>
				</div>
			</UiContainer>
		</AdminPageLayout>
	)
}
