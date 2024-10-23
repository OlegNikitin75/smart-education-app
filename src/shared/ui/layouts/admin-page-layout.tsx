import { FC, ReactNode } from 'react'
import { UiContainer } from '../ui-container'

interface IAdminPageLayoutProps {
	header?: ReactNode
	children: ReactNode
	footer?: ReactNode
}

export const AdminPageLayout: FC<IAdminPageLayoutProps> = ({
	header,
	children,
	footer
}) => {
	return (
		<UiContainer>
			{header}
			<main className='mx-auto flex-1  w-full max-w-md px-3'>{children}</main>
		</UiContainer>
	)
}
