import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type Comment } from 'entities/Comment'

import { articleDetailCommentsAdapter } from '../adapter/articleDetailCommentsAdapter/articleDetailCommentsAdapter'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { type ArticleDetailCommentsSchema } from '../types/articleDetailCommentsSchema'

const initialState = articleDetailCommentsAdapter.getInitialState<ArticleDetailCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
})

const articleDetailCommentsSlice = createSlice({
    name: 'articleDetailComments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state, action) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false
                articleDetailCommentsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})
export const { actions: articleDetailCommentsActions, reducer: articleDetailCommentsReducer } =
    articleDetailCommentsSlice
