import type { Meta, StoryObj } from '@storybook/react'

import AddNewCommentForm from './AddNewCommentForm'

const meta = {
    title: 'shared/AddNewCommentForm',
    component: AddNewCommentForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AddNewCommentForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
