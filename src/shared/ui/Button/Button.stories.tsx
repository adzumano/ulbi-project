import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

import { Button } from './Button'

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
    },
}

export const PrimaryDark: Story = {
    args: {
        children: 'Button',
        variant: 'primary',
    },
}
PrimaryDark.decorators = [ThemeDecorator('dark')]
export const Clear: Story = {
    args: {
        children: 'Button',
        variant: 'clear',
    },
}

export const ClearDark: Story = {
    args: {
        children: 'Button',
        variant: 'clear',
    },
}
ClearDark.decorators = [ThemeDecorator('dark')]

export const Outline: Story = {
    args: {
        children: 'Button',
        variant: 'outline',
    },
}

export const OutlineDark: Story = {
    args: {
        children: 'Button',
        variant: 'outline',
    },
}
OutlineDark.decorators = [ThemeDecorator('dark')]
