import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator'

import LoginForm from './LoginForm'

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: {},
        }),
    ],
}
export const Error: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: 'admin', password: '123', error: 'Error' },
        }),
    ],
}
export const Loading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { isLoading: true },
        }),
    ],
}
