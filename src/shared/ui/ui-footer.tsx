'use client'
import { usePathname } from 'next/navigation'
import { NAVIGATION } from '../constants/navigation'
import { UiContainer, UiLink } from '.'
import {
	CourseMenuSvgComponent,
	HomeMenuSvgComponent,
	ScheduleMenuSvgComponent,
	UserMenuSvgComponent
} from '../icons'


export const UiFooter = () => {
	const pathname = usePathname()

	return (
		<footer className='mb-0 mt-auto rounded-tl-2xl rounded-tr-2xl bg-app-black py-5'>
			<UiContainer>
				<nav className=''>
					<ul className='mx-auto flex items-center justify-between'>
						<li className='w-1/4'>
							<UiLink
								className={`${pathname === NAVIGATION.app ? 'bg-app-green' : ''}`}
								variant='navigation'
								href={NAVIGATION.app}
								icon={<HomeMenuSvgComponent />}
							>
								{pathname === NAVIGATION.app && (
									<span className='font-play400 text-[10px] text-app-dark'>
										Главная
									</span>
								)}
							</UiLink>
						</li>
						<li className='w-1/4'>
							<UiLink
								className={`${pathname === NAVIGATION.app_schedule ? 'bg-app-green' : ''}`}
								variant='navigation'
								href={NAVIGATION.app_schedule}
								icon={<ScheduleMenuSvgComponent />}
							>
								{pathname === NAVIGATION.app_schedule && (
									<span className='font-play400 text-[10px] text-app-dark'>
										Расписание
									</span>
								)}
							</UiLink>
						</li>
						<li className='w-1/4'>
							<UiLink
								className={`${pathname === NAVIGATION.app_courses ? 'bg-app-green' : ''}`}
								variant='navigation'
								href={NAVIGATION.app_courses}
								icon={<CourseMenuSvgComponent />}
							>
								{pathname === NAVIGATION.app_courses && (
									<span className='font-play400 text-[10px] text-app-dark'>
										Курсы
									</span>
								)}
							</UiLink>
						</li>
						<li className='w-1/4'>
							<UiLink
								className={`${pathname === NAVIGATION.app_profile ? 'bg-app-green' : ''}`}
								variant='navigation'
								href={NAVIGATION.app_profile}
								icon={<UserMenuSvgComponent />}
							>
								{pathname === NAVIGATION.app_profile && (
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
