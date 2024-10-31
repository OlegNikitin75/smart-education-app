export const TtRedoSvgComponent = ({
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
			<path d='M21 7v6h-6' />
			<path d='M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7' />
		</svg>
	)
}
