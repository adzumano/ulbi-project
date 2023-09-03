import { type Preview } from '@storybook/react'
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator'
import { StyleDecorator } from 'shared/config/storybook/decorators/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { TranslationDecorator } from 'shared/config/storybook/decorators/TranslationDecorator'

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
    decorators: [StyleDecorator, TranslationDecorator, ThemeDecorator('light'), RouterDecorator],
}

export default preview
