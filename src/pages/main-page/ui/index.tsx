import authOptions from '@/app/lib/authOption'
import { NAVIGATION } from '@/shared/constants/navigation'
import { UiContainer, UiHeading, UiLink } from '@/shared/ui'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export const MainPage = async () => {
	const session = await getServerSession(authOptions)
	if (session) redirect(NAVIGATION.start)

	if (!session)
		return (
			<UiContainer>
				<div className='h-80 absolute left-0 right-0 w-full'>
					<Image
					className='object-cover'
						src='/img/main-page-image.svg'
						fill={true}
						alt='main-page-image'
					/>
				</div>
				<main className='relative mx-auto h-full w-full max-w-md px-3 py-5'>
					<div className='flex h-full flex-col justify-end'>
						<div>
							<UiHeading tag='h1' className='mb-3'>
								Смарт обучение в телефоне
							</UiHeading>
							<p className='mb-14 font-play400 text-app-white'>
								Удобный помощник на вашем устройстве
							</p>

							<UiLink href={NAVIGATION.login} variant='primary'>
								Давайте начнем
							</UiLink>
						</div>
					</div>
				</main>
			</UiContainer>
		)
}
