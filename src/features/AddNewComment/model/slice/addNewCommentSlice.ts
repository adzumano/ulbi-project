import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { type AddNewCommentSchema } from '../types/addNewCommentSchema'

const initialState: AddNewCommentSchema = {
    text: '',
    error: undefined,
    isLoading: false,
}
const addNewCommentSlice = createSlice({
    name: 'addNewComment',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        },
    },
})

export const { actions: addNewCommentActions, reducer: addNewCommentReducer } = addNewCommentSlice
