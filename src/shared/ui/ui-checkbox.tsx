import { FC, InputHTMLAttributes, PropsWithRef, ReactNode } from 'react'
import clsx from 'clsx'

type CheckboxVariant = 'select' | 'secondary' | 'selectUser'
type IUiCheckboxProps = {
	label?: string
	variant: CheckboxVariant
	className?: string
	title: ReactNode
	inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>
}

export const UiCheckbox: FC<IUiCheckboxProps> = ({
	label,
	variant,
	className,
	title,
	inputProps
}) => {
	return (
		<div className={clsx(className, 'w-full')}>
			<label className={clsx(className, 'h-full w-full')}>
				{label}
				<input type='checkbox' {...inputProps} className='peer hidden' />
				<div
					className={clsx(
						{
							select:
								'flex h-full items-center justify-center rounded-md bg-app-gray px-3 text-app-white duration-300 peer-checked:bg-app-green peer-checked:text-app-dark',
							selectUser:
								'flex h-full items-center justify-center rounded-md bg-app-gray px-3 text-app-white duration-300 peer-checked:bg-app-green peer-checked:text-app-dark p-3',
							secondary: ''
						}[variant]
					)}
				>
					{title}
				</div>
			</label>
		</div>
	)
}
