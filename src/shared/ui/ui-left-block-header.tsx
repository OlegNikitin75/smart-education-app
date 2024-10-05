'use client'
import { FC } from 'react'
import clsx from 'clsx'
import { UiButton } from '.'
import { ArrowBackSvgComponent } from '../icons'
import { useRouter } from 'next/navigation'

interface IUiLeftBlockHeaderProps {
	className?: string
}

export const UiLeftBlockHeader: FC<IUiLeftBlockHeaderProps> = ({
	className
}) => {
	const router = useRouter()
	return (
		<div className={clsx(className, 'flex items-center gap-2')}>
			<UiButton variant='back' onClick={() => router.back()}>
				<ArrowBackSvgComponent />
				Назад
			</UiButton>
		</div>
	)
}
