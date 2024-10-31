export const TtUnderlineSvgComponent = ({
	color = '#000000'
}: {
	color: string
}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M6 4v6a6 6 0 0 0 12 0V4' />
			<line x1='4' x2='20' y1='20' y2='20' />
		</svg>
	)
}
