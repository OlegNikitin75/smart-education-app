'use client'

import { useEffect } from 'react'
import { UiButton, UiHeading } from '@/shared/ui'
import { ErrorSvgComponent } from '@/shared/icons'

export default function Error({
	error,
	reset
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className='flex flex-col justify-center bg-app-dark p-5'>
			<div>
				<ErrorSvgComponent />
				<UiHeading tag='h2' className='text-app-light-gray'>
					Что-то пошло не так!
				</UiHeading>
			</div>
			<UiButton
				variant='primary'
				className='mb-0 mt-auto'
				onClick={() => reset()}
			>
				Попробовать ещё
			</UiButton>
		</div>
	)
}
