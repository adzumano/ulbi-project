import type { Meta, StoryObj } from '@storybook/react'

import ArticleDetailPage from './ArticleDetailPage'

const meta = {
    title: 'shared/ArticleDetailPage',
    component: ArticleDetailPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticleDetailPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
