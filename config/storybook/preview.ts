import { type Preview } from '@storybook/react'
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator'
import { StyleDecorator } from 'shared/config/storybook/decorators/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [StyleDecorator, ThemeDecorator('light'), RouterDecorator],
}

export default preview
