import type { Meta, StoryObj } from '@storybook/react'

import { ArticleTextBlockComponent } from './ArticleTextBlockComponent'

const meta = {
    title: 'shared/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        block: {
            id: '1',
            type: 'text',
            title: 'Test 1',
            paragraphs: [],
        },
    },
} satisfies Meta<typeof ArticleTextBlockComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
