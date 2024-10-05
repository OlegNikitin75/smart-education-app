import { FC, ReactNode } from 'react'
import { UiFooter } from '..'

interface IAppPageLayoutProps {
	header: ReactNode
	children: ReactNode
	footer?:ReactNode
}

export const AppPageLayout: FC<IAppPageLayoutProps> = ({
	header,
	children,
	footer,
}) => {
	return (
		<div className='flex h-full flex-col  bg-app-dark'>
			{header}
			<main className='h-full px-3'>{children}</main>
			{footer}
		</div>
	)
}
