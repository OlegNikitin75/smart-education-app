export function ArrowsUpDownSvgComponent({
	color = '#000000'
}: {
	color: string
}) {
	return (
		<svg
			width='20'
			height='26'
			viewBox='0 0 25 43'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M21.5 16.5L12.489 7.5L3.5 16.5'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M3.5 26.5L12.511 35.5L21.5 26.5'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
