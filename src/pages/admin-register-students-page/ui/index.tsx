import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import authOptions from '@/app/lib/authOption'
import { NAVIGATION } from '@/shared/constants/navigation'
import { CreateStudent } from '@/features/create-student'
import { AdminPageLayout } from '@/shared/ui/layouts'
import {
	UiContainer,
	UiHeader,
	UiHeading,
	UiLeftBlockHeader
} from '@/shared/ui'
import { AccessDenied } from '@/pages/access-denied-page'

export const AdminRegisterStudentsPage = async () => {
	const session = await getServerSession(authOptions)

	if (!session) redirect(NAVIGATION.main)
	if (session.user.role !== 'ADMIN') return <AccessDenied />

	if (session)
		return (
			<AdminPageLayout
				header={
					<UiHeader
						leftBlock={<UiLeftBlockHeader className='flex-1' />}
						middleBlock={
							<UiHeading tag='h3' className='centerPosition'>
								Студент
							</UiHeading>
						}
					/>
				}
			>
				<CreateStudent />
			</AdminPageLayout>
		)
}
