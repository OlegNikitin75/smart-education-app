import { FC } from 'react'
import { revalidatePath } from 'next/cache'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import authOptions from '@/app/lib/authOption'
import { UserCard } from '@/entities/card-user'
import db from '@/app/lib/db'
import { NAVIGATION } from '@/shared/constants/navigation'
import { UsersSvgComponent } from '@/shared/icons'
import { AdminPageLayout } from '@/shared/ui/layouts'
import {
	UiHeader,
	UiHeading,
	UiLeftBlockHeader,
	UiLink,
	UiListEmpty
} from '@/shared/ui'
import { AccessDenied } from '@/pages/access-denied-page'

interface IAdminSingleCGroupPageProps {
	params: {
		id: string
	}
}

const getGroup = async (id: string) => {
	const response = await db.group.findFirst({
		where: {
			id: id
		},
		select: {
			id: true,
			title: true
		}
	})
	return response
}
const getAllStudents = async (id: string) => {
	const response = await db.user.findMany({
		where: {
			role: 'STUDENT',
			groups: { every: { id: id } }
		},
		select: {
			id: true,
			lastName: true,
			firstName: true,
			middleName: true,
			login: true,
			password: true,
			groups: true,
			role: true
		},
		orderBy: {
			lastName: 'asc'
		}
	})
	return response
}

const deleteItems = async (id: string) => {
	'use server'

	const response = await db.user.deleteMany({
		where: { id: id }
	})
	revalidatePath(NAVIGATION.admin_students)
	return response
}

export const AdminSingleGroupPage: FC<IAdminSingleCGroupPageProps> = async ({
	params
}) => {
	const group = await getGroup(params.id[0])
	const dataStudents = await getAllStudents(params.id[0])

	const session = await getServerSession(authOptions)

	if (!session) redirect(NAVIGATION.main)
	if (session.user.role !== 'ADMIN') return <AccessDenied />

	return (
		<>
			<AdminPageLayout
				header={
					<UiHeader
						leftBlock={<UiLeftBlockHeader />}
						middleBlock={
							<UiHeading tag='h3' className='centerPosition'>
								{group?.title}
							</UiHeading>
						}
					/>
				}
			>
				<div className='flex h-full flex-col justify-between py-5'>
					{dataStudents.length === 0 && (
						<UiListEmpty
							image={<UsersSvgComponent />}
							message={
								<UiHeading tag='h2' className='uppercase text-app-white'>
									Здесь пока никого нет
								</UiHeading>
							}
							desc={
								<p className='text-app-light-gray'>
									Нажмите на кнопку ниже, чтобы добавить студентов в группу
								</p>
							}
						/>
					)}
					<ul className='flex flex-col gap-4 overflow-scroll pb-5'>
						{dataStudents.map((student, index) => (
							<UserCard
								key={student.id}
								data={student}
								groupTitle={dataStudents[index].groups[0].title}
								deleteItems={deleteItems}
							/>
						))}
					</ul>

					<div className='mb-0 mt-auto space-y-4'>
						<UiLink
							variant='add'
							href={{
								pathname: NAVIGATION.admin_register_student,
								query: { _id: group?.id, title: group?.title }
							}}
						>
							Добавить студента
						</UiLink>
					</div>
				</div>
			</AdminPageLayout>
		</>
	)
}
