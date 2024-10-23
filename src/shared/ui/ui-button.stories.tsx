import type { Meta, StoryObj } from '@storybook/react'
import { UiButton } from '.'
import { ArrowBackSvgComponent } from '../icons'

const meta: Meta<typeof UiButton> = {
	title: 'Компоненты/Button',
	component: UiButton,
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
export const ButtonBackSM: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Кнопка для возврата на предыдущую страницу (разрешение < 1024px)'
			}
		}
	},
	args: {
		variant: 'back',
		children: [<ArrowBackSvgComponent />, 'Назад']
	}
}

export const ButtonBackLG: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Кнопка для возврата на предыдущую страницу (разрешение ≥ 1024px)'
			}
		}
	},
	args: {
		variant: 'back',
		children: [<ArrowBackSvgComponent />, 'Назад']
	}
}
