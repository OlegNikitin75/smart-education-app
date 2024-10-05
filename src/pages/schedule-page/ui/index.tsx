import { UiFooter, UiHeader, UiHeading } from '@/shared/ui'
import { AppPageLayout } from '@/shared/ui/layouts'
import { FC } from 'react'

interface ISchedulePageProps {}

export const SchedulePage: FC<ISchedulePageProps> = ({}) => {
	return (
		<AppPageLayout
			header={
				<UiHeader
					middleBlock={
						<UiHeading tag='h3' className='centerPosition'>
							Расписание
						</UiHeading>
					}
				/>
			}
			footer={<UiFooter />}
		>
			HomePage
		</AppPageLayout>
	)
}
