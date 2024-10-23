import { ReactNode } from 'react'

export const UiContainer = ({ children }: { children: ReactNode }) => {
	return (
		<div className='relative flex flex-col justify-between mx-auto h-full w-full max-w-[1024px]'>
			{children}
		</div>
	)
}
