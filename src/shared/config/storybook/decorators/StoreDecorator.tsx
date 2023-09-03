import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoryObj } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type FC } from 'react'

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: FC<StoryObj>) =>
    (
        <StoreProvider initialState={state}>
            <Story />
        </StoreProvider>
    )
