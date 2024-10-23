'use client'

import { FC, ReactNode } from 'react'
import { Notification } from '@/features/notification'
import { usePathname } from 'next/navigation'
import { NAVIGATION } from '../constants/navigation'

interface IUiHeaderProps {
	leftBlock?: ReactNode
	middleBlock?: ReactNode
}

export const UiHeader: FC<IUiHeaderProps> = ({ leftBlock, middleBlock }) => {
	const pathname = usePathname()
	const isPathname = pathname === NAVIGATION.app

	return (
		<header>
			<div className='relative flex h-20 flex-1 items-center justify-between px-3 py-5 text-app-white'>
				{leftBlock}
				{middleBlock}
				{isPathname && <Notification />}
			</div>
		</header>
	)
}
