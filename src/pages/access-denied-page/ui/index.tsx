import { DeniedSvgComponent } from '@/shared/icons'
import { UiLink } from '@/shared/ui'
import { NAVIGATION } from '@/shared/constants/navigation'

export const AccessDenied = () => {
	return (
			<div className='flex h-full flex-col items-center justify-between py-5 px-3 w-full max-w-md lg:py-6 lg:border-2 lg:border-app-light-gray mx-auto lg:h-[90%] lg:rounded-3xl '>
				<div></div>
				<div className='flex flex-col items-center gap-6'>
					<DeniedSvgComponent />
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
