import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { AdminPageLayout } from '@/shared/ui/layouts'
import authOptions from '@/app/lib/authOption'
import { CreateGroup } from '@/features/create-group'
import { NAVIGATION } from '@/shared/constants/navigation'
import {
	UiHeader,
	UiLeftBlockHeader,
	UiHeading,
	UiContainer
} from '@/shared/ui'
import { AccessDenied } from '@/pages/access-denied-page'

export const AdminRegisterGroupPage = async () => {
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
							Новая группа
						</UiHeading>
					}
				/>
			}
		>
			<CreateGroup />
		</AdminPageLayout>
	)
}
