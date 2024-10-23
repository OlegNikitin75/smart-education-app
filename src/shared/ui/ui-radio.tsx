import { FC, InputHTMLAttributes, PropsWithRef, ReactNode } from 'react'
import clsx from 'clsx'
import { FieldError } from 'react-hook-form'

type VariantRadio = 'primary' | 'secondary'
type IUiRadioProps = {
	className?: string
	classNameBlock?: string
	label?: string
	error?: FieldError | undefined
	title?: string | ReactNode
	variant: VariantRadio
	inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>
}

export const UiRadio: FC<IUiRadioProps> = ({
	className,
	classNameBlock,
	label,
	variant,
	title,
	inputProps,
	error
}) => {
	return (
		<div className={clsx(classNameBlock, '')}>
			<label className={clsx(className, 'w-full text-app-white')}>
				<input {...inputProps} type='radio' className='peer hidden' />
				<span
					className={clsx(
						'',
						{
							primary:
								'relative block h-6 w-6 rounded-full border-2 border-app-green duration-300 after:absolute after:left-1/2 after:top-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-app-green after:opacity-0 peer-checked:after:opacity-100',
							secondary: `${error ? 'border-2 border-app-red' : ''} flex h-full items-center justify-center rounded-md bg-app-gray py-3 text-app-white duration-300 peer-checked:bg-app-green peer-checked:text-app-dark`
						}[variant]
					)}
				>
					{title && title}
				</span>
				{label && label}
			</label>
		</div>
	)
}
