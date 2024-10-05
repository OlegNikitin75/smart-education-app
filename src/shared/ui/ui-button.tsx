import { ButtonHTMLAttributes, MouseEventHandler } from 'react'
import clsx from 'clsx'

type UiButtonVariant = 'primary' | 'secondary' | 'icon' | 'back'
type UiButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>
	className?: string
	variant: UiButtonVariant
} & ButtonHTMLAttributes<HTMLButtonElement>

export const UiButton = ({ className, variant, ...props }: UiButtonProps) => {
	return (
		<button
			{...props}
			className={clsx(
				className,
				'',
				{
					primary:
						'w-full rounded-2xl border-[1px] border-app-dark bg-app-white py-5 font-play700 text-app-dark',
					secondary:
						'w-full rounded-2xl bg-app-green py-5 font-play700 text-app-dark',
					icon: 'flex items-center justify-center',
					back: 'flex items-center gap-2 text-app-green'
				}[variant]
			)}
		/>
	)
}
