import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

import { Modal } from './Modal'

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        isOpen: true,
    },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
        children: 'Modal text',
    },
}

export const Dark: Story = {
    args: {
        children: 'Modal text',
    },
}
Dark.decorators = [ThemeDecorator('dark')]
