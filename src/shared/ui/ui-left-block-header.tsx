'use client'
import { FC} from 'react'
import clsx from 'clsx'
import { UiButton } from '.'
import { useRouter } from 'next/navigation'
import { ArrowBackSvgComponent } from '../icons'

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
