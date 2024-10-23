import { NotificationSvgComponent } from '@/shared/icons'
import { UiButton } from '@/shared/ui'
import { FC } from 'react'

interface INotificationProps {}

export const Notification: FC<INotificationProps> = ({}) => {
	return (
		<UiButton className='relative mr-2 h-6 w-6' variant={'icon'}>
			<NotificationSvgComponent />
			<div className='before:l-1/2 absolute -right-1 -top-1 h-4 w-4 rounded-full bg-app-dark before:absolute before:top-1/2 before:h-3 before:w-3 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-app-green selection:before:h-3'></div>
		</UiButton>
	)
}
