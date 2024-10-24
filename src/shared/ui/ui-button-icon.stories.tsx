import type { Meta, StoryObj } from '@storybook/react'
import { UiButtonIcon } from '.'
import {
	EyeSlashSvgComponent,
	EyeSvgComponent
} from '../icons'

const meta: Meta<typeof UiButtonIcon> = {
	title: 'Components/Button icon',
	component: UiButtonIcon,
	argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['icon'],
    },
  },
	tags: ['autodocs'],

}

type Story = StoryObj<typeof UiButtonIcon>

export default meta

export const ShowPassword: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Кнопка включения отображения пароля'
			}
		}
	},
	args: {
		variant: 'icon',
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
		variant: 'icon',
		children: <EyeSvgComponent />
	}
}




