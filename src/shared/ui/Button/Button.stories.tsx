import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

import { Button } from './Button'

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        children: 'Button',
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary',
    },
}
export const PrimaryDark: Story = {
    args: {
        ...Primary.args,
    },
}
PrimaryDark.decorators = [ThemeDecorator('dark')]
export const Clear: Story = {
    args: {
        variant: 'clear',
    },
}

export const ClearDark: Story = {
    args: {
        variant: 'clear',
    },
}
ClearDark.decorators = [ThemeDecorator('dark')]

export const ClearInverted: Story = {
    args: {
        variant: 'clearInverted',
    },
}

export const ClearInvertedDark: Story = {
    args: {
        variant: 'clearInverted',
    },
}
ClearInvertedDark.decorators = [ThemeDecorator('dark')]

export const Outline: Story = {
    args: {
        variant: 'outline',
    },
}

export const OutlineDark: Story = {
    args: {
        variant: 'outline',
    },
}
OutlineDark.decorators = [ThemeDecorator('dark')]

export const Background: Story = {
    args: {
        variant: 'background',
    },
}

export const BackgroundDark: Story = {
    args: {
        variant: 'background',
    },
}
BackgroundDark.decorators = [ThemeDecorator('dark')]

export const BackgroundInverted: Story = {
    args: {
        variant: 'backgroundInverted',
    },
}

export const BackgroundInvertedDark: Story = {
    args: {
        variant: 'backgroundInverted',
    },
}
BackgroundInvertedDark.decorators = [ThemeDecorator('dark')]

export const Square: Story = {
    args: {
        children: '>',
        square: true,
    },
}

export const SizeSmall: Story = {
    args: {
        size: 'small',
    },
}

export const SizeMedium: Story = {
    args: {
        size: 'medium',
    },
}

export const SquareSizeLarge: Story = {
    args: {
        size: 'large',
    },
}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
}
