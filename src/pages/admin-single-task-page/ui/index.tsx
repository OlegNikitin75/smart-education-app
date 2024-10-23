import { FC } from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { getAllTasks } from '@/app/actions/get-all-tasks'
import authOptions from '@/app/lib/authOption'
import { NAVIGATION } from '@/shared/constants/navigation'
import { UiHeader, UiHeading, UiLeftBlockHeader } from '@/shared/ui'
import { AdminPageLayout } from '@/shared/ui/layouts'
import { getTask } from '@/app/actions/get-task'
import { AddTaskDescription } from '@/features/add-task-description'
import { AccessDenied } from '@/pages/access-denied-page'
import { UploadDataTaskUrl } from '@/features/upload-data-task-url'

interface IAdminSingleTaskPageProps {
	params: {
		slug: string
		id:string
	}
}

export const AdminSingleTaskPage: FC<IAdminSingleTaskPageProps> = async ({
	params
}) => {
	const task = await getTask(params.slug)

	const dataTasks = await getAllTasks(params.id)


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
							<UiHeading tag='h3' className='centerPosition text-center'>
								{task?.label}
							</UiHeading>
						}
					/>
				}
			>
				<div className='flex h-full flex-col gap-5 py-5'>
					<AddTaskDescription />
					<UploadDataTaskUrl />
				</div>
			</AdminPageLayout>
		</>
	)
}
