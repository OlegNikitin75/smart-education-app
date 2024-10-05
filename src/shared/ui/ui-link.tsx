import clsx from 'clsx'
import { ReactNode } from 'react'
import Link from 'next/link'

type UiLinkVariant =
	| 'primary'
	| 'secondary'
	| 'navigation'
	| 'back'
	| 'add'
	| 'menu'
	| 'menuActive'

export type UiLinkProps = {
	onClick?: () => void
	variant: UiLinkVariant
	icon?: ReactNode
	children?: ReactNode
} & Parameters<typeof Link>[0]

export const UiLink = ({
	onClick,
	className,
	variant,
	icon,
	children,
	...props
}: UiLinkProps) => {
	return (
		<Link
			onClick={onClick}
			{...props}
			className={clsx(
				className,
				'block',
				{
					primary:
						'0 flex w-full items-center justify-center rounded-2xl border-[1px] border-app-dark bg-app-white py-5 font-play700 text-app-dark',
					secondary:
						'flex w-full items-center justify-center rounded-2xl bg-app-gray py-7 font-play700 text-lg text-app-white',

					navigation:
						'flex flex-col items-center justify-center rounded-2xl py-1',

					back: 'flex items-center gap-2 text-app-green',

					add: 'flex w-full items-center justify-center rounded-2xl bg-app-green px-5 py-5 font-play700 text-app-dark',

					menu: 'text-color_doctor hover:text-color_mint font-medium duration-300',
					menuActive:
						'text-color_mint hover:text-color_mint font-medium duration-300'
				}[variant]
			)}
		>
			{icon}
			{children}
		</Link>
	)
}
