import { DeniedSvgComponent } from '@/shared/icons'
import { UiLink } from '@/shared/ui'
import { NAVIGATION } from '@/shared/constants/navigation'

export const AccessDenied = () => {
	return (
		<div className='mx-auto flex h-full w-full max-w-md flex-col items-center justify-between px-3 py-5 lg:h-[90%] lg:rounded-3xl lg:border-2 lg:border-app-light-gray lg:py-6'>
			<div></div>
			<div className='flex flex-col items-center gap-6'>
				<DeniedSvgComponent color='#FFADAD' />
				<span className='font-play700 text-3xl text-app-light-gray'>
					Доступ запрещен
				</span>
			</div>

			<UiLink variant='primary' href={NAVIGATION.app}>
				Назад
			</UiLink>
		</div>
	)
}
