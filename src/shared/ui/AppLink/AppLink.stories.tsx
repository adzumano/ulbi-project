import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

import { AppLink } from './AppLink'

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/',
    },
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'AppLink',
    },
}

export const PrimaryDark: Story = {
    args: {
        variant: 'primary',
        children: 'AppLink',
    },
}
PrimaryDark.decorators = [ThemeDecorator('dark')]

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'AppLink',
    },
}

export const SecondaryDark: Story = {
    args: {
        variant: 'secondary',
        children: 'AppLink',
    },
}
SecondaryDark.decorators = [ThemeDecorator('dark')]
