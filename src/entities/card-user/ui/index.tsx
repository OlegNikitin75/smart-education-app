'use client'

import { FC, useRef } from 'react'
import { DeleteSvgComponent } from '../../../shared/icons'
import { UiButton, UiIconButton } from '../../../shared/ui'
import { useSelectItemsStore } from '@/app/store/useSelectItemsStore'

interface IUserCardProps {
	data: {
		id: string
		lastName: string
		firstName: string
		middleName: string
		post?: string | null
		login: string
		password: string
	}
	groupTitle?: string
	deleteItems: (id: string) => void
}

export const UserCard: FC<IUserCardProps> = ({
	data,
	groupTitle,
	deleteItems
}) => {
	const { add } = useSelectItemsStore()

	const ref = useRef<HTMLDivElement | null>(null)

	let downX: number

	const onPointerMove = (event: any) => {
		const newX = event.clientX

		if (newX - downX < 0) {
			add(data.id)
			ref.current?.classList.add('-translate-x-[64px]')
			ref.current?.firstElementChild?.classList.add('opacity-30')
		} else {
			ref.current?.classList.remove('-translate-x-[64px]')
			ref.current?.firstElementChild?.classList.remove('opacity-30')
		}
	}
	const onPointerDown = (event: any) => {
		downX = event.clientX

		ref.current?.addEventListener('pointermove', onPointerMove)
	}

	const onPointerUp = (event: any) => {
		ref.current?.removeEventListener('pointermove', onPointerMove)
	}

	return (
		<li className='overflow-hidden rounded-2xl bg-app-gray'>
			<div
				onPointerDown={onPointerDown}
				onPointerUp={onPointerUp}
				ref={ref}
				className='flex duration-700'
			>
				<article className='shrink-0 grow basis-full px-4 py-3'>
					<div className='flex gap-1 font-play700 text-lg text-app-white'>
						<span>{data.lastName}</span>
						<span>{data.firstName}</span>
						<span>{data.middleName}</span>
					</div>
					{data.post && <span className='text-app-white'>{data.post}</span>}
					{groupTitle && <span className='text-app-white'>{groupTitle}</span>}

					<div className='flex flex-col gap-1'>
						<span className='text-app-light-gray'>Логин: {data.login}</span>
						<span className='text-app-light-gray'>Пароль: {data.password}</span>
					</div>
				</article>
				<UiIconButton
					onClick={async () => deleteItems(data.id)}
					variant='basic'
					className='min-w-16 bg-app-red'
				>
					<DeleteSvgComponent color='#F8F9FA' />
				</UiIconButton>
			</div>
		</li>
	)
}
