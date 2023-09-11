import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Comment } from 'entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string, ThunkConfig<string>>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        if (!articleId) {
            return rejectWithValue('error')
        }

        try {
            const res = await extra.api.get<Comment[]>('/comments', {
                params: { articleId, _expand: 'user' },
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
