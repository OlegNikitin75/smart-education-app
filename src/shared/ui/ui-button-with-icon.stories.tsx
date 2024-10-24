import type { Meta, StoryObj } from '@storybook/react'
import { UiButtonWithIcon } from '.'
import { ArrowBackSvgComponent } from '../icons'

const meta: Meta<typeof UiButtonWithIcon> = {
	title: 'Components/Button with icon',
	component: UiButtonWithIcon,
	argTypes: {
		variant: {
			control: {
				type: 'select'
			},
			options: ['back']
		}
	},
	tags: ['autodocs']
}

type Story = StoryObj<typeof UiButtonWithIcon>

export default meta

export const Back: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Кнопка для возврата на предыдущую страницу'
			}
		}
	},
	args: {
		variant: 'back',
		children: [<ArrowBackSvgComponent key='arrowBackLg' />, 'Назад']
	}
}
