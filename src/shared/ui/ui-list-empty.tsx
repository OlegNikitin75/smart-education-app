import { FC, ReactNode } from 'react'

interface IUiListEmptyProps {
	image: ReactNode
	message: ReactNode
	desc?: ReactNode
}
export const UiListEmpty: FC<IUiListEmptyProps> = ({
	image,
	message,
	desc
}) => {
	return (
		<div className='absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 px-3 text-center'>
			{image}
			{message}
			{desc}
		</div>
	)
}
