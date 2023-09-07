import type { Meta, StoryObj } from '@storybook/react'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

import ProfilePage from './ProfilePage'

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    firstname: 'Zhaslan',
                    lastname: 'Karagoishin',
                    age: 23,
                    city: 'Uralsk',
                    country: Country.KAZAKHSTAN,
                    currency: Currency.KZT,
                    username: 'pulsar',
                },
            },
        }),
    ],
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator('dark')]
