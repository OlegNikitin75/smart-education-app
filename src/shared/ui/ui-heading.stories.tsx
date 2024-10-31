import type { Meta, StoryObj } from '@storybook/react'
import { UiHeading } from './ui-heading'

const meta: Meta<typeof UiHeading> = {
	title: 'Components/Typography',
	component: UiHeading,
	tags: ['autodocs']
}

type Story = StoryObj<typeof UiHeading>

export default meta

export const Headings: Story = {
	render: () => (
		<>
			<UiHeading tag='h1'>Заголовок 1</UiHeading>
			<UiHeading tag='h2'>Заголовок 2</UiHeading>
			<UiHeading tag='h3'>Заголовок 3</UiHeading>
		</>
	)
}
