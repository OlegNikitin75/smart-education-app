import type { Meta, StoryObj } from '@storybook/react'
import { UiIconButton } from '.'
import {  EyeSlashSvgComponent, EyeSvgComponent } from '../icons'

const meta: Meta<typeof UiIconButton> = {
	title: 'Components/Buttons/Icon Button',
	component: UiIconButton,
	argTypes: {
		variant: {
			control: {
				type: 'radio'
			},
			options: ['back','icon']
		}
		
		
	},
	tags: ['autodocs']
}

type Story = StoryObj<typeof UiIconButton>

export default meta


export const Basic: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Кнопка включения отображения пароля'
			}
		}
	},
	args: {
		variant: 'basic',
		children: <EyeSlashSvgComponent />
	}
}
export const HidePassword: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Кнопка выключения отображения пароля'
			}
		}
	},
	args: {
		variant: 'basic',
		children: <EyeSvgComponent />
	}
}
