import type { Preview } from '@storybook/react'
import '../src/app/styles/globals.css'

const preview: Preview = {
	parameters: {
		layout:'centered',
		backgrounds: {
			default: 'dark',
			values: [{
				name: 'dark',
				value: '#17191C'
			}]
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
