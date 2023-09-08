import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

import { Skeleton } from './Skeleton'

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        width: 100,
        height: 200,
    },
}

export const DefaultDark: Story = {
    args: {
        width: 100,
        height: 200,
    },
    decorators: [ThemeDecorator('dark')],
}

export const Circle: Story = {
    args: {
        borderRadius: '50%',
        width: 100,
        height: 100,
    },
}

export const CircleDark: Story = {
    args: {
        borderRadius: '50%',
        width: 100,
        height: 100,
    },
    decorators: [ThemeDecorator('dark')],
}
