import { type StoryObj } from '@storybook/react'
import classNames from 'classnames'
import { type FC } from 'react'
import { type Theme, ThemeProvider } from 'shared/config/theme'

export const ThemeDecorator = (theme: Theme) => (Story: FC<StoryObj>) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={classNames('app', theme)}>
                <Story />
            </div>
        </ThemeProvider>
    )
