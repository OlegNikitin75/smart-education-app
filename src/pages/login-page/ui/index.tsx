import { Login } from '@/features/login'
import { UiHeading } from '@/shared/ui'

export const LoginPage = () => {
	return (
		<main className='relative mx-auto h-full w-full max-w-md overflow-hidden overflow-y-scroll border-zinc-400 bg-[url("/img/bg-login-page.png")] bg-cover bg-scroll bg-top bg-no-repeat px-3 py-5 lg:h-[90%] lg:rounded-[40px] lg:border-4 lg:py-6 lg:shadow-xl lg:shadow-slate-400'>
			<div className='flex h-full flex-col justify-end'>
				<UiHeading tag='h2' className='mb-4'>
					Рады видеть Вас
				</UiHeading>
				<p className='mb-8 font-play400 text-app-dark'>
					Для входа в приложение введите логин и пароль
				</p>
				<Login />
			</div>
		</main>
	)
}
