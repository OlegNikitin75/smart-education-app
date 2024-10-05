import clsx from 'clsx'
import { HTMLAttributes } from 'react'

type UiHeadingVariant = 'h1' | 'h2' | 'h3' | 'h4'

export type UiHeadingProps = {
	tag: UiHeadingVariant
} & HTMLAttributes<HTMLHeadingElement>

export function UiHeading({ className, tag, ...props }: UiHeadingProps) {
	const Tag = tag || 'h1'

	return (
		<Tag
			{...props}
			className={clsx(
				className,
				'',
				{
					h1: 'font-play700 text-5xl leading-[110%] text-app-dark',
					h2: 'font-play700 text-2xl leading-[120%] text-app-dark',
					h3: 'font-play700 text-lg leading-[120%] text-app-white',
					h4: ''
				}[tag]
			)}
		/>
	)
}
