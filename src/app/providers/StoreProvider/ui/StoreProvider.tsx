import { type ReducersMapObject } from '@reduxjs/toolkit'
import React, { type FC } from 'react'
import { Provider } from 'react-redux'

import { createReduxStore } from '../config/store'
import { type StateSchema } from '../types/schema'

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}
export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState, asyncReducers } = props

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
    )
    return <Provider store={store}>{children}</Provider>
}
