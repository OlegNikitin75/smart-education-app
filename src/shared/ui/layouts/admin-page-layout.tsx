import { FC, ReactNode } from 'react'

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
		
		<div className='relative  mx-auto flex h-full w-full max-w-md flex-col overflow-y-scroll bg-app-dark lg:h-[90%] lg:rounded-[40px] lg:border-4 lg:border-app-light-gray lg:shadow-xl lg:shadow-slate-400'>
		
			{header}
			<main className='h-full px-3'>{children}</main>
			{footer}
			
		</div>
	)
}

