export const TtItalicSvgComponent = ({
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
			<line x1='19' x2='10' y1='4' y2='4' />
			<line x1='14' x2='5' y1='20' y2='20' />
			<line x1='15' x2='9' y1='4' y2='20' />
		</svg>
	)
}
