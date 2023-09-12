import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getArticleDetailsData } from 'entities/Article'
import { type Comment } from 'entities/Comment'
import { getUserAuthData } from 'entities/User'

import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addNewCommentArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/addNewCommentArticle',
    async (text, thunkAPI) => {
        const { extra, dispatch, getState, rejectWithValue } = thunkAPI

        const userData = getUserAuthData(getState())
        const article = getArticleDetailsData(getState())

        if (!userData || !text || !article) {
            return rejectWithValue('no data')
        }

        try {
            const res = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            })

            if (!res.data) {
                throw new Error()
            }

            await dispatch(fetchCommentsByArticleId(article.id))

            return res.data
        } catch (e) {
            return rejectWithValue('error')
        }
    },
)
