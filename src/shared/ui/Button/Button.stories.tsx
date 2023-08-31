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

export const ClearInverted: Story = {
    args: {
        children: 'Button',
        variant: 'clearInverted',
    },
}

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

export const OutlineSizeSmall: Story = {
    args: {
        children: 'Button',
        variant: 'outline',
        size: 'small',
    },
}

export const OutlineSizeMedium: Story = {
    args: {
        children: 'Button',
        variant: 'outline',
        size: 'medium',
    },
}

export const OutlineSizeLarge: Story = {
    args: {
        children: 'Button',
        variant: 'outline',
        size: 'large',
    },
}

export const Background: Story = {
    args: {
        children: 'Button',
        variant: 'background',
    },
}

export const BackgroundInverted: Story = {
    args: {
        children: 'Button',
        variant: 'backgroundInverted',
    },
}

export const Square: Story = {
    args: {
        children: '>',
        square: true,
    },
}

export const SquareSizeSmall: Story = {
    args: {
        children: '>',
        size: 'small',
        square: true,
    },
}

export const SquareSizeMedium: Story = {
    args: {
        children: '>',
        size: 'medium',
        square: true,
    },
}

export const SquareSizeLarge: Story = {
    args: {
        children: '>',
        size: 'large',
        square: true,
    },
}
