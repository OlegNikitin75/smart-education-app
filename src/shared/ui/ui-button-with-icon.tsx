import clsx from 'clsx'
import { ButtonHTMLAttributes, MouseEventHandler } from 'react'

type UiButtonWithIconVariant = 'back' 
type UiButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>
	className?: string
	variant: UiButtonWithIconVariant
} & ButtonHTMLAttributes<HTMLButtonElement>

export const UiButtonWithIcon = ({
	className,
	variant,
	...props
}: UiButtonProps) => {
	return (
		<button
			{...props}
			className={clsx(
				className,
				'duration-300',
				{
					back:
						'flex items-center gap-2 text-app-green lg:opacity-65 lg:hover:opacity-100'
				}[variant]
			)}
		/>
	)
}
