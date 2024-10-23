import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import authOptions from '@/app/lib/authOption'
import { NAVIGATION } from '@/shared/constants/navigation'
import { AdminPageLayout } from '@/shared/ui/layouts'
import { CreateTeacher } from '@/features/create-teacher'
import { UiHeader, UiLeftBlockHeader, UiHeading } from '@/shared/ui'
import { AccessDenied } from '@/pages/access-denied-page'

export const AdminRegisterTeacherPage = async () => {
	const session = await getServerSession(authOptions)

	if (!session) redirect(NAVIGATION.main)
	if (session.user.role !== 'ADMIN') return <AccessDenied />

	return (
		<AdminPageLayout
			header={
				<UiHeader
					leftBlock={<UiLeftBlockHeader className='flex-1' />}
					middleBlock={
						<UiHeading tag='h3' className='centerPosition'>
							Преподаватель
						</UiHeading>
					}
				/>
			}
		>
			<CreateTeacher />
		</AdminPageLayout>
	)
}
