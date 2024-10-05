import { ReactNode } from 'react'

export const UiContainer = ({ children }: { children: ReactNode }) => {
	return <div className='container px-3'>{children}</div>
}
