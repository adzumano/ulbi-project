import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData'

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
    reducers: {
        setReadonly: (state, action) => {
            state.readonly = action.payload
        },
        updateProfile: (state, action) => {
            state.form = { ...state.form, ...action.payload }
        },
        cancelEdit: (state) => {
            state.readonly = true
            state.form = state.data
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.readonly = true
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
