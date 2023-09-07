import type { Meta, StoryObj } from '@storybook/react'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import AvatarImg from 'shared/assets/tests/storybook.png'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

import { ProfileCard } from './ProfileCard'

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        data: {
            firstname: 'Zhaslan',
            lastname: 'Karagoishin',
            age: 23,
            city: 'Uralsk',
            country: Country.KAZAKHSTAN,
            currency: Currency.KZT,
            username: 'pulsar',
            avatar: AvatarImg,
        },
    },
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator('dark')]

export const withError: Story = {
    args: {
        error: 'error',
    },
}

export const withLoading: Story = {
    args: {
        isLoading: true,
    },
}
