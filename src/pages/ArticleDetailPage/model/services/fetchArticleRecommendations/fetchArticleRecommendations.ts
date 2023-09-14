import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'

export const fetchArticleRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articleDetails/fetchArticleRecommendations',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            const res = await extra.api.get<Article[]>('/articles', {
                params: { _limit: 4, _expand: 'user' },
            })

            if (!res.data) {
                throw new Error()
            }

            return res.data
        } catch (e) {
            return rejectWithValue('error')
        }
    },
)
