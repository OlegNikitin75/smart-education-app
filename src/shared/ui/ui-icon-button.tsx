import { ButtonHTMLAttributes, MouseEventHandler } from 'react'
import clsx from 'clsx'

type UiButtonVariant = 'basic'
type UiButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>
	className?: string
	variant: UiButtonVariant
} & ButtonHTMLAttributes<HTMLButtonElement>

export const UiIconButton = ({
	className,
	variant,
	...props
}: UiButtonProps) => {
	return (
		<button
			{...props}
			className={clsx(
				className,
				'flex items-center justify-center',
				{
					basic: ''
				}[variant]
			)}
		/>
	)
}
