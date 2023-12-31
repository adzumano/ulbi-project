import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type ArticleType, type ArticleView, type ArticlesSortField } from 'entities/Article'
import { ARTICLE_VIEW_STORAGE_KEY } from 'shared/const/localStorage'
import { type Order } from 'shared/types/order'

import { articlesAdapter } from '../adapter/articlesAdapter'
import { fetchArticles } from '../services/fetchArticles/fetchArticles'
import { type ArticlesSchema } from '../types/articlesSchema'

const initialState = articlesAdapter.getInitialState<ArticlesSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: 'block',
    page: 1,
    limit: 0,
    hasMore: true,
    init: false,
    sort: 'createdAt',
    order: 'asc',
    search: '',
    type: 'all',
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
            const view = (localStorage.getItem(ARTICLE_VIEW_STORAGE_KEY) as ArticleView) ?? state.view
            state.view = view
            state.limit = view === 'block' ? 4 : 9
            state.init = true
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setOrder: (state, action: PayloadAction<Order>) => {
            state.order = action.payload
        },
        setSort: (state, action: PayloadAction<ArticlesSortField>) => {
            state.sort = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                state.isLoading = true
                state.error = undefined

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state)
                }
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false
                articlesAdapter.addMany(state, action.payload)
                state.hasMore = action.payload.length >= state.limit

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload)
                } else {
                    articlesAdapter.addMany(state, action.payload)
                }
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: articlesActions, reducer: articlesReducer } = articlesSlice
