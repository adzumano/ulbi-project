import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

import { Text } from './Text'

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {
        title: 'Title',
        text: 'text',
    },
}

export const Dark: Story = {
    args: {
        title: 'Title',
        text: 'text',
    },
}
Dark.decorators = [ThemeDecorator('dark')]

export const onlyTitle: Story = {
    args: {
        title: 'Title',
    },
}

export const onlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
}
onlyTitleDark.decorators = [ThemeDecorator('dark')]

export const onlyText: Story = {
    args: {
        text: 'text',
    },
}

export const onlyTextDark: Story = {
    args: {
        text: 'text',
    },
}
onlyTextDark.decorators = [ThemeDecorator('dark')]

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'text',
        variant: 'error',
    },
}

export const SmallSize: Story = {
    args: {
        title: 'Title',
        text: 'text',
        size: 'small',
    },
}

export const MediumSize: Story = {
    args: {
        title: 'Title',
        text: 'text',
        size: 'medium',
    },
}
