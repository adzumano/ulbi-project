import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { type Profile, type ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
}
const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = true
                state.data = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
