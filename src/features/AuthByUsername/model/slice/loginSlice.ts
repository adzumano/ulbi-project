import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { loginByUsername } from '../services/loginByUsername/loginByUsername'
import { type LoginSchema } from '../types/loginSchema'

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state, action) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = true
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
