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
				<div className='relative flex flex-1 justify-between text-app-white items-center min-h-20 px-3 py-5'>
					{leftBlock}
					{middleBlock}
					{isPathname && <Notification/> }
					
				</div>
		</header>
	)
}
