import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

import { LangSwitcher } from './LangSwitcher'

const meta = {
    title: 'features/LangSwitcher',
    component: LangSwitcher,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof LangSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator('dark')]
