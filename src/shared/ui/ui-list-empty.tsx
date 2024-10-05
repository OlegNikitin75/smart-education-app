import { FC, ReactNode } from 'react'

interface IUiListEmptyProps {
	image: ReactNode
	message: ReactNode
	desc?: ReactNode
}
export const UiListEmpty: FC<IUiListEmptyProps> = ({ image, message,desc }) => {
	return (
		<div className='px-3 absolute w-full text-center left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4'>
			{image}
			{message}
			{desc}
		</div>
	)
}
