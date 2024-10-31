'use client'
import { FC, useEffect, useState } from 'react'
import clsx from 'clsx'
import {  UiButtonWithIcon } from '.'
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
			<UiButtonWithIcon
				variant='back'
				onClick={() => router.back()}
			>
				<ArrowBackSvgComponent color='#CAFFBF' />
				Назад
			</UiButtonWithIcon>
		</div>
	)
}
