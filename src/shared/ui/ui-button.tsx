import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react'
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
				'duration-300',
				{
					primary:
						'w-full max-w-md rounded-2xl border-[1px] border-app-dark bg-app-green py-5 font-play700 text-app-dark md:hover:bg-app-green/85',
					secondary:
						'w-full max-w-md rounded-2xl bg-app-green py-5 font-play700 text-app-dark md:hover:bg-red-500',
					icon: 'flex items-center justify-center',
					back: 'flex items-center gap-2 text-app-green lg:opacity-65 lg:hover:opacity-100'
				}[variant]
			)}
		/>
	)
}
