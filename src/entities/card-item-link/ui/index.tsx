'use client'

import { FC, useRef } from 'react'
import { UiButton, UiLink } from '../../../shared/ui'
import { DeleteSvgComponent } from '../../../shared/icons'
import { NAVIGATION } from '@/shared/constants/navigation'

interface ICardItemLinkProps {
	data: {
		id: string
		title?: string
		name?: string
		faculty?: string
		semester?: string
	}
	deleteItems: (id: string) => void
}

export const CardItemLink: FC<ICardItemLinkProps> = ({ data, deleteItems }) => {
	const ref = useRef<HTMLDivElement | null>(null)

	let downX: number

	const onPointerMove = (event: any) => {
		const newX = event.clientX

		if (newX - downX < 0) {
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

	const onPointerUp = () => {
		ref.current?.removeEventListener('pointermove', onPointerMove)
	}

	return (
		<li className='overflow-hidden rounded-xl'>
			<div
				onPointerDown={onPointerDown}
				onPointerUp={onPointerUp}
				ref={ref}
				className='flex duration-700'
			>
				{!!data.faculty && (
					<>
						<UiLink
							className='flex shrink-0 grow basis-full flex-col'
							variant='secondary'
							href={`${NAVIGATION.admin_courses}/${data.id}`}
						>
							<span>{data.name}</span>
							<span className='text-app-light-gray'>
								{data.faculty}
								<span className='pl-4 font-play400'>{data.semester}</span>
							</span>
						</UiLink>
						<UiButton
							onClick={async () => deleteItems(data.id)}
							variant='icon'
							className='min-w-16 bg-app-red'
						>
							<DeleteSvgComponent />
						</UiButton>
					</>
				)}
				<UiLink
					className='shrink-0 grow basis-full'
					variant='secondary'
					href={`${NAVIGATION.admin_groups}/${data.id}`}
				>
					{data.title}
				</UiLink>
				<UiButton
					onClick={async () => deleteItems(data.id)}
					variant='icon'
					className='min-w-16 bg-app-red'
				>
					<DeleteSvgComponent />
				</UiButton>
			</div>
		</li>
	)
}
