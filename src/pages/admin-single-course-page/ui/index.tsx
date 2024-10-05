import { FC } from 'react'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { getAllTasks } from '@/app/actions/get-all-tasks'
import { getCourse } from '@/app/actions/get-course'
import authOptions from '@/app/lib/authOption'
import { NAVIGATION } from '@/shared/constants/navigation'
import { UiHeader, UiHeading, UiLeftBlockHeader } from '@/shared/ui'
import { AdminPageLayout } from '@/shared/ui/layouts'
import { AccessDenied } from '@/pages/access-denied-page'

interface IAdminAdminSingleCoursePageProps {
	params: {
		id: string
	}
}

export const AdminSingleCoursePage: FC<
	IAdminAdminSingleCoursePageProps
> = async ({ params }) => {
	const course = await getCourse(params.id)
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
								{course?.name}
							</UiHeading>
						}
					/>
				}
			>
				<div className='flex h-full flex-col justify-between py-5'>
					<ul className='flex flex-col gap-4 overflow-scroll pb-5'>
						{!!dataTasks[0].tasks.length && (
							<li>
								<Link
									href={`${NAVIGATION.admin_courses}/${dataTasks[0].id}/tasks`}
									className='flex w-full flex-col rounded-2xl bg-app-gray p-4 text-center font-play700 text-lg text-app-white'
								>
									Практические задания (ПЗ)
									<span className='font-play400 text-sm text-app-light-gray'>
										{dataTasks[0].tasks.length} шт.
									</span>
								</Link>
							</li>
						)}

						{!!dataTasks[0].graphicWorks.length && (
							<li>
								<Link
									href={'/'}
									className='flex w-full flex-col rounded-2xl bg-app-gray p-4 text-center font-play700 text-lg text-app-white'
								>
									Расчетно-графические работы (РГР)
									<span className='font-play400 text-sm text-app-light-gray'>
										{dataTasks[0].graphicWorks.length} шт.
									</span>
								</Link>
							</li>
						)}
						{!!dataTasks[0].verificationWorks.length && (
							<li>
								<Link
									href={'/'}
									className='flex w-full flex-col rounded-2xl bg-app-gray p-4 text-center font-play700 text-lg text-app-white'
								>
									Контрольные работы (КР)
									<span className='font-play400 text-sm text-app-light-gray'>
										{dataTasks[0].verificationWorks.length} шт.
									</span>
								</Link>
							</li>
						)}
					</ul>
				</div>
			</AdminPageLayout>
		</>
	)
}
