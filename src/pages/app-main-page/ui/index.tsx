import { FC } from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import authOptions from '@/app/lib/authOption'
import db from '@/app/lib/db'
import { NAVIGATION } from '@/shared/constants/navigation'
import { UiContainer, UiFooter, UiHeader, UiHeading } from '@/shared/ui'
import { AppPageLayout } from '@/shared/ui/layouts'

interface IAppMainPageProps {}

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

export const AppMainPage: FC<IAppMainPageProps> = async ({}) => {
	const session = await getServerSession(authOptions)

	if (!session) redirect(NAVIGATION.main)

	const groupsId = session.user.groups

	const studentGroup = await getGroup(groupsId[0])

	return (
		<AppPageLayout
			header={
				<UiHeader
					leftBlock={
						<div>
							<UiHeading tag='h3'>
								<span>{session?.user?.firstName}</span>{' '}
								<span>{session?.user?.lastName}</span>
							</UiHeading>
							{session?.user?.role === 'TEACHER' && (
								<p className='text-app-light-gray'>{session?.user.post}</p>
							)}
							{session?.user?.role === 'STUDENT' && (
								<p className='text-app-light-gray'>{studentGroup?.title}</p>
							)}
						</div>
					}
				/>
			}
			footer={<UiFooter />}
		>
					{session?.user?.role === 'TEACHER' && (
				<div className='text-app-light-blue'>AppMainPageTeacher</div>
			)}
			{session?.user?.role === 'STUDENT' && (
				<div className='text-app-light-blue'>AppMainPageStudent</div>
			)}
		
		</AppPageLayout>
	)
}
