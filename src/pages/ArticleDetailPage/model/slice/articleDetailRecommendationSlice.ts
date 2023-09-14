import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article'

import { articleDetailRecommendationAdapter } from '../adapter/articleDetailRecommendationAdapter/articleDetailRecommendationAdapter'
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations'
import { type ArticleDetailRecommendationSchema } from '../types/articleDetailRecommendationSchema'

const initialState: ArticleDetailRecommendationSchema =
    articleDetailRecommendationAdapter.getInitialState<ArticleDetailRecommendationSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    })
export const articleDetailRecommendationSlice = createSlice({
    name: 'articleDetailRecommendation',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false
                articleDetailRecommendationAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: articleDetailRecommendationActions, reducer: articleDetailRecommendationReducer } =
    articleDetailRecommendationSlice
