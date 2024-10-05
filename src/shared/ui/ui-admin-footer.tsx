'use client'
import { usePathname } from 'next/navigation'
import { UiContainer, UiLink } from '.'
import { NAVIGATION } from '../constants/navigation'
import {
	HomeMenuSvgComponent,
	UserMenuSvgComponent
} from '../icons'


export const UiAdminFooter = () => {
	const pathname = usePathname()

	return (
		<footer className='min-h-[90px] mb-0 mt-auto rounded-tl-2xl rounded-tr-2xl bg-app-black py-5'>
			<UiContainer>
				<nav className=''>
					<ul className='mx-auto flex items-center justify-between'>
						<li className='w-1/4'>
							<UiLink
								className={`${pathname === NAVIGATION.admin ? 'bg-app-green' : ''}`}
								variant='navigation'
								href={NAVIGATION.admin}
								icon={<HomeMenuSvgComponent />}
							>
								{pathname === NAVIGATION.admin && (
									<span className='font-play400 text-[10px] text-app-dark'>
										Главная
									</span>
								)}
							</UiLink>
						</li>
					
						<li className='w-1/4'>
							<UiLink
								className={`${pathname === NAVIGATION.admin_profile ? 'bg-app-green' : ''}`}
								variant='navigation'
								href={NAVIGATION.admin_profile}
								icon={<UserMenuSvgComponent />}
							>
								{pathname === NAVIGATION.admin_profile && (
									<span className='font-play400 text-[10px] text-app-dark'>
										Профиль
									</span>
								)}
							</UiLink>
						</li>
					</ul>
				</nav>
			</UiContainer>
		</footer>
	)
}
