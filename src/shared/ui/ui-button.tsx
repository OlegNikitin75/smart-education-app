import { ButtonHTMLAttributes, MouseEventHandler } from 'react'
import clsx from 'clsx'

type UiButtonVariant = 'primary'
type UiButtonSize = 'normal' | 'large'
type UiButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>
	className?: string
	variant: UiButtonVariant
	size?: UiButtonSize
} & ButtonHTMLAttributes<HTMLButtonElement>

export const UiButton = ({
	className,
	size = 'normal',
	variant,
	...props
}: UiButtonProps) => {
	return (
		<button
			{...props}
			className={clsx(
				className,
				'w-full min-w-[360px] max-w-md rounded-2xl border-app-dark bg-app-green py-5 font-play700 text-app-dark duration-300 lg:hover:bg-app-green/85',
				{
					normal: 'w-full min-w-[360px]',
					large: 'w-[448px]'
				}[size]
			)}
		/>
	)
}
