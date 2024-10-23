import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { deleteCoursesItem } from '@/app/actions/delete-course-item'
import { getAllCourses } from '@/app/actions/get-all-courses'
import { AdminPageLayout } from '@/shared/ui/layouts/admin-page-layout'
import authOptions from '@/app/lib/authOption'
import { CardItemLink } from '@/entities/card-item-link'
import { AccessDenied } from '@/pages/access-denied-page'
import { NAVIGATION } from '@/shared/constants/navigation'
import { NotCoursesSvgComponent } from '@/shared/icons'
import {
	UiHeader,
	UiHeading,
	UiLeftBlockHeader,
	UiLink,
	UiListEmpty
} from '@/shared/ui'

export const AdminCoursesPage = async () => {
	const session = await getServerSession(authOptions)

	const dataCourse = await getAllCourses()

	if (!session) redirect(NAVIGATION.main)
	if (session.user.role !== 'ADMIN') return <AccessDenied />

	return (
		<AdminPageLayout
			header={
				<UiHeader
					leftBlock={<UiLeftBlockHeader />}
					middleBlock={
						<UiHeading tag='h3' className='centerPosition'>
							Курсы
						</UiHeading>
					}
				/>
			}
		>
			<div className='flex h-full flex-col justify-between gap-4 py-5'>
				{dataCourse.length === 0 && (
					<UiListEmpty
						image={<NotCoursesSvgComponent />}
						message={
							<UiHeading tag='h2' className='uppercase text-app-white'>
								Учебных курсов пока нет
							</UiHeading>
						}
						desc={
							<p className='text-app-white'>
								Нажмите на кнопку, чтобы добавить новый курс
							</p>
						}
					/>
				)}
				<ul className='flex flex-col gap-3'>
					{dataCourse?.map(course => (
						<CardItemLink
							key={course.id}
							data={course}
							deleteItems={deleteCoursesItem}
						/>
					))}
				</ul>
				<UiLink variant='add' href={NAVIGATION.admin_register_courses}>
					Добавить новый курс
				</UiLink>
			</div>
		</AdminPageLayout>
	)
}
