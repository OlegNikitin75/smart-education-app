import { FC } from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { AdminPageLayout } from '@/shared/ui/layouts/admin-page-layout'
import authOptions from '@/app/lib/authOption'
import { NAVIGATION } from '@/shared/constants/navigation'
import { UiHeader, UiHeading, UiLeftBlockHeader, UiLink } from '@/shared/ui'
import { getAllTasks } from '@/app/actions/get-all-tasks'
import { AccessDenied } from '@/pages/access-denied-page'

interface IAdminTasksListPageProps {
	params: {
		id: string
	}
}

export const AdminTasksListPage: FC<IAdminTasksListPageProps> = async ({
	params
}) => {
	const session = await getServerSession(authOptions)

	const dataTasks = await getAllTasks(params.id)

	const tasksArr = dataTasks[0].tasks.sort((a, b) => (a.id > b.id ? 1 : -1))

	if (!session) redirect(NAVIGATION.main)
	if (session.user.role !== 'ADMIN') return <AccessDenied />

	return (
		<AdminPageLayout
			header={
				<UiHeader
					leftBlock={<UiLeftBlockHeader />}
					middleBlock={
						<UiHeading tag='h3' className='centerPosition text-center'>
							ПЗ
						</UiHeading>
					}
				/>
			}
		>
			<ul className='flex flex-wrap justify-between gap-y-3'>
				{tasksArr?.map(taskItem => (
					<li key={taskItem.id} className='basis-[calc(50%-6px)]'>
						<UiLink
							variant='add'
							href={`${NAVIGATION.admin_courses}/${dataTasks[0].id}/tasks/${taskItem.id}`}
						>
							{taskItem.label}
						</UiLink>
					</li>
				))}
			</ul>
		</AdminPageLayout>
	)
}
