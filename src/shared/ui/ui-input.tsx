import { FC, InputHTMLAttributes, PropsWithRef, ReactNode } from 'react'
import clsx from 'clsx'
import { FieldError } from 'react-hook-form'

type InputTypes = 'primary' | 'secondary' | 'numbers'

type UiInputProps = {
	error?: FieldError
	className?: string
	label?: string
	inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>
	icon?: ReactNode
	variant?: InputTypes
}

export const UiInput: FC<UiInputProps> = ({
	error,
	className,
	label,
	inputProps,
	icon,
	variant = 'primary'
}) => {
	return (
		<>
			<div
				className={clsx(
					className,
					` ${variant === 'numbers' ? 'text-center' : ''} `
				)}
			>
				<label
					className={`${variant === 'primary' ? 'text-app-dark' : 'text-app-white'} ${variant === 'numbers' ? 'inline-block pl-0' : 'pl-3'} mb-1 block font-play700`}
				>
					{label}
				</label>
				<div className='relative'>
					{icon && (
						<div className='absolute left-3 top-1/2 -translate-y-1/2'>
							{icon}
						</div>
					)}

					<input
						{...inputProps}
						className={clsx(
							className,
							{
								primary: `${error ? 'border-2 border-app-red' : 'focus:border-app-dark'} w-full shrink-0 rounded-2xl border-2 bg-app-white px-4 py-5 pl-10 text-app-dark focus:border-2`,

								numbers: `${error ? 'border-2 border-app-red' : 'focus:border-app-green'} w-full shrink-0 rounded-2xl border-2 border-app-dark bg-app-gray py-5 text-center text-app-light-gray focus:border-2`,

								secondary: `${error ? 'border-2 border-app-red' : 'focus:border-app-green'} w-full shrink-0 rounded-2xl border-app-dark bg-app-gray px-4 py-5 text-app-light-gray focus:border-2`
							}[variant]
						)}
					/>
				</div>
			</div>
		</>
	)
}
