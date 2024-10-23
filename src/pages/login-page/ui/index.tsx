import { Login } from '@/features/login'
import { UiContainer, UiHeading } from '@/shared/ui'
import Image from 'next/image'

export const LoginPage = () => {
	return (
		<UiContainer>
			<div className='md:hidden absolute w-full'>
				<Image
					src='/img/main-page-image.svg'
					width={1000}
					height={360}
					alt='main-page-image'
				/>
			</div>
			<main className='relative mx-auto h-full w-full max-w-md px-3 py-5'>
				<div className='flex h-full flex-col justify-end md:justify-center'>
					<UiHeading tag='h2' className='mb-4 text-app-white'>
						Рады видеть Вас
					</UiHeading>
					<p className='mb-8 font-play400 text-app-white'>
						Для входа в приложение введите логин и пароль
					</p>
					<Login />
				</div>
			</main>
		</UiContainer>
	)
}
