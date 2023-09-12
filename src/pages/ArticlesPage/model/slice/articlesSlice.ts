import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type Article, type ArticleView } from 'entities/Article'
import { ARTICLE_VIEW_STORAGE_KEY } from 'shared/const/localStorage'

import { articlesAdapter } from '../adapter/articlesAdapter'
import { fetchArticles } from '../services/fetchArticles/fetchArticles'
import { type ArticlesSchema } from '../types/articlesSchema'

const initialState = articlesAdapter.getInitialState<ArticlesSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: 'block',
})
export const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLE_VIEW_STORAGE_KEY, action.payload)
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLE_VIEW_STORAGE_KEY) as ArticleView
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false
                articlesAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: articlesActions, reducer: articlesReducer } = articlesSlice
