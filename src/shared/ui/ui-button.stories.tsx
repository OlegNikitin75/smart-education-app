import type { Meta, StoryObj } from '@storybook/react'
import { UiButton } from '.'

const meta: Meta<typeof UiButton> = {
	title: 'Components/Button',
	component: UiButton,
	argTypes: {
		variant: {
			control: {
				type: 'radio'
			},
			options: ['primary']
		},
		size: {
			control: {
				type: 'select'
			},
			
			options: ['normal','large'],
		
		},
	},
	tags: ['autodocs']
}

type Story = StoryObj<typeof UiButton>

export default meta

export const Primary: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Основная кнопка'
			}
		}
	},
	args: {
		variant: 'primary',
		children: 'Кнопка'
	}
}
