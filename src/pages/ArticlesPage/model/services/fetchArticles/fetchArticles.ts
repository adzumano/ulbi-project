import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'

export const fetchArticles = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articles/fetchArticles',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            const res = await extra.api.get('/articles', { params: { _expand: 'user' } })

            if (!res.data) {
                throw new Error()
            }

            return res.data
        } catch (e) {
            return rejectWithValue('error')
        }
    },
)
