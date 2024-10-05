import authOptions from '@/app/lib/authOption'
import { NAVIGATION } from '@/shared/constants/navigation'
import { UiHeading, UiLink } from '@/shared/ui'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export const MainPage = async () => {
	const session = await getServerSession(authOptions)
	if(session)  redirect(NAVIGATION.start)

	if (!session)
		return (
			<main className='relative mx-auto h-full w-full max-w-md overflow-hidden border-zinc-400 bg-[url("/img/bg-main-page.png")] bg-cover bg-top bg-no-repeat px-3 py-5 lg:h-[90%] lg:rounded-[40px] lg:border-4 lg:py-6 lg:shadow-xl lg:shadow-slate-400'>
				<div className='flex h-full flex-col justify-end'>
					<div>
						<UiHeading tag='h1' className='mb-3'>
							Смарт обучение в телефоне
						</UiHeading>
						<p className='mb-14 font-play400 text-app-dark'>
							Удобный помощник на вашем устройстве
						</p>

						<UiLink href={NAVIGATION.login} variant='primary'>
							Давайте начнем
						</UiLink>
					</div>
				</div>
			</main>
		)
}
