import { type StoryObj } from '@storybook/react'
import { type FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (Story: FC<StoryObj>) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
)
