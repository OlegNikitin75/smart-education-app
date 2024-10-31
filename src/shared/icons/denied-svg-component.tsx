export const DeniedSvgComponent = ({color='#000000'}:{color:string}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='84'
			height='84'
			viewBox='0 0 24 24'
			fill='none'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<circle cx='12' cy='12' r='10' />
			<path d='m4.9 4.9 14.2 14.2' />
		</svg>
	)
}
