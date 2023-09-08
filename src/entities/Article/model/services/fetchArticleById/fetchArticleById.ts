import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articleDetails/fetchArticleById',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            const res = await extra.api.get(`/articles/${articleId}`)

            if (!res.data) {
                throw new Error()
            }

            return res.data
        } catch (e) {
            return rejectWithValue('error')
        }
    },
)
