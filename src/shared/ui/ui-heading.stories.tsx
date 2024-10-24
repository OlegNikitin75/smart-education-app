import type { Meta, StoryObj } from '@storybook/react'
import { UiHeading } from '.'

const meta: Meta<typeof UiHeading> = {
	title: 'Components/Typography',
	component: UiHeading,
	tags: ['autodocs']
}

type Story = StoryObj<typeof UiHeading>

export default meta

export const Heading1: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Заголовок главной страницы приложения'
			}
		}
	},
	args: {
		tag: 'h1',
		children: 'Заголовок H1'
	}
}
export const Heading2: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Заголовок'
			}
		}
	},
	args: {
		tag: 'h2',
		children: 'Заголовок H2'
	}
}
export const Heading3: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Заголовок'
			}
		}
	},
	args: {
		tag: 'h3',
		children: 'Заголовок H3'
	}
}

