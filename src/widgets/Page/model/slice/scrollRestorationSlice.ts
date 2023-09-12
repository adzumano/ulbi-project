import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { type ScrollRestorationSchema } from '../../model/types/scrollRestorationSchema'

const initialState: ScrollRestorationSchema = {
    scroll: {},
}

interface SetScrollPositionPayload {
    path: string
    position: number
}

const scrollRestorationSlice = createSlice({
    name: 'scrollRestoration',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<SetScrollPositionPayload>) => {
            state.scroll[payload.path] = payload.position
        },
    },
})

export const { actions: scrollRestorationActions, reducer: scrollRestorationReducer } = scrollRestorationSlice
