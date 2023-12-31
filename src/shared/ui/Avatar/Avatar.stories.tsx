import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

import AvatarImg from '../../assets/tests/storybook.png'
import { Avatar } from './Avatar'

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        src: AvatarImg,
        alt: 'avatar',
    },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator('dark')]
