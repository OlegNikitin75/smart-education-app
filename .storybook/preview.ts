import type { Preview } from '@storybook/react'
import '../src/app/styles/globals.css'

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'dark',
			values: [
				{
					name: 'dark',
					value: '#17191C'
				},
				{ name: 'light', value: '#F7F9F2' }
			]
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
}

export default preview
