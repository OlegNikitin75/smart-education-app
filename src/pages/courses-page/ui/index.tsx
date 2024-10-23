import { UiHeader } from '@/shared/ui'
import { AppPageLayout } from '@/shared/ui/layouts'
import { FC } from 'react'

interface ICoursesPageProps {}

export const CoursesPage: FC<ICoursesPageProps> = ({}) => {
	return (
		<AppPageLayout header={<UiHeader leftBlock='left' middleBlock='heading' />}>
			HomePage
		</AppPageLayout>
	)
}
