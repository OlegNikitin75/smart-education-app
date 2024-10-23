import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		fontFamily: {
			play400: ['"Play Regular"', 'sans-serif'],
			play700: ['"Play Bold"', 'sans-serif']
		},
		extend: {
			colors: {
				'app-black': '#000000',
				'app-dark': '#17191C',
				'app-white': '#F8F9FA',
				'app-green': '#CAFFBF',
				'app-light-blue': '#9BF6FF',
				'app-red': '#FFADAD',
				'app-violet': '#BDB2FF',
				'app-pink': '#FFC6FF',
				'app-yellow': '#FDFFB6',
				'app-orange': '#FFD6A5',
				'app-gray': '#292E33',
				'app-light-gray': '#6C757D'
			}
		}
	},
	plugins: []
}
export default config
