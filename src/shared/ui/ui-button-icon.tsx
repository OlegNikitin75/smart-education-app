import { ButtonHTMLAttributes, MouseEventHandler } from 'react'
import clsx from 'clsx'

type UiButtonIconVariant = 'icon'
type UiButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>
	className?: string
	variant: UiButtonIconVariant
} & ButtonHTMLAttributes<HTMLButtonElement>

export const UiButtonIcon = ({ className, variant, ...props }: UiButtonProps) => {
	return (
		<button
			{...props}
			className={clsx(
				className,
				'duration-300',
				{
					icon: 'flex items-center justify-center'
				}[variant]
			)}
		/>
	)
}
