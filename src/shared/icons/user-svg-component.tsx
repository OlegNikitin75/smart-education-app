export function UserSvgComponent({ color }: { color: string }) {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M14.4749 4.52513C15.8417 5.89197 15.8417 8.10804 14.4749 9.47488C13.108 10.8417 10.892 10.8417 9.52513 9.47488C8.15829 8.10804 8.15829 5.89197 9.52513 4.52513C10.892 3.15829 13.108 3.15829 14.4749 4.52513'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M4 18.5V19.5C4 20.052 4.448 20.5 5 20.5H19C19.552 20.5 20 20.052 20 19.5V18.5C20 15.474 16.048 13.508 12 13.508C7.952 13.508 4 15.474 4 18.5Z'
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}
