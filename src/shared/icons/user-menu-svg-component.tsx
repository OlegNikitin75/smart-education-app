export function UserMenuSvgComponent({
	color = '#000000'
}: {
	color: string
}) {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M18.3639 5.63604C21.8787 9.15076 21.8787 14.8492 18.3639 18.3639C14.8492 21.8787 9.15074 21.8787 5.63604 18.3639C2.12132 14.8492 2.12132 9.15074 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.3639 5.63604'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M13.9891 8.3239C15.0876 9.42244 15.0876 11.2035 13.9891 12.3021C12.8906 13.4006 11.1095 13.4006 10.0109 12.3021C8.91238 11.2035 8.91238 9.42244 10.0109 8.3239C11.1095 7.22537 12.8906 7.22537 13.9891 8.3239'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M17.707 18.958C16.272 17.447 14.248 16.5 12 16.5C9.75197 16.5 7.72797 17.447 6.29297 18.959'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
