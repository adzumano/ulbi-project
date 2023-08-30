import { type StoryObj } from '@storybook/react'
import classNames from 'classnames'
import { type FC } from 'react'
import { type Theme } from 'shared/config/theme'

export const ThemeDecorator = (theme: Theme) => (Story: FC<StoryObj>) =>
    (
        <div className={classNames('app', theme)}>
            <Story />
        </div>
    )
