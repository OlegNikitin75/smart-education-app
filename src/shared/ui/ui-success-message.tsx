import { FC } from 'react'
import { CheckSvgComponent } from '../icons'
import { UiButton } from '.'

interface IUiSuccessMessageProps {
	message: string
	handleClose?: () => void
}

export const UiSuccessMessage: FC<IUiSuccessMessageProps> = ({
	message,
	handleClose
}) => {
	return (
		<div className='absolute inset-0 z-40 flex h-full w-full flex-col justify-center bg-app-dark px-4 py-5'>
			<div className='w-full h-full max-w-md mx-auto flex flex-col justify-between'>
				<div></div>
				<div className='flex flex-col items-center gap-6'>
				<CheckSvgComponent />
				<div className='text-center font-play700 text-4xl leading-normal text-app-white'>
					{message}
				</div>
			</div>
			<UiButton onClick={handleClose} variant='primary'>
				Закрыть
			</UiButton>
			</div>
		</div>
	)
}
