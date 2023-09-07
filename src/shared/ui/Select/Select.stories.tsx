import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

import { Select } from './Select'

const meta = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        value: 'value',
        options: [
            { value: 'value', content: 'Value 1' },
            { value: 'value2', content: 'Value 2' },
            { value: 'value3', content: 'Value 3' },
        ],
    },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator('dark')]
