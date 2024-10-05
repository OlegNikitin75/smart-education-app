import { FC } from 'react'
import { ErrorSvgComponent } from '../icons'
import { UiButton } from '.'

interface IUiErrorMessageProps {
	message: string
	handleClose: () => void
}

export const UiErrorMessage: FC<IUiErrorMessageProps> = ({
	handleClose,
	message
}) => {
	return (
		<div className='absolute inset-0 z-40 flex h-full w-full flex-col justify-between bg-app-dark px-4 py-5'>
			<div></div>
			<div className='flex flex-col items-center gap-6'>
				<ErrorSvgComponent />
				<div className='text-center font-play700 text-4xl text-app-white leading-normal'>
					{message}
				</div>
			</div>
			<UiButton onClick={handleClose} variant='secondary'>
				Закрыть
			</UiButton>
		</div>
	)
}
