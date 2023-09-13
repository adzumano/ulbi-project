import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ArticlesSortField } from 'entities/Article'
import { type Order } from 'shared/types/order'

import { getArticlesInit } from '../../selectors/articleSelectors'
import { articlesActions } from '../../slice/articlesSlice'
import { fetchArticles } from '../fetchArticles/fetchArticles'

export const initArticles = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articles/initArticles',
    async (searchParams, thunkAPI) => {
        const { getState, dispatch } = thunkAPI
        const isInit = getArticlesInit(getState())

        if (!isInit) {
            searchParams.forEach((value, key) => {
                switch (key) {
                    case 'sort':
                        dispatch(articlesActions.setSort(value as ArticlesSortField))
                        break
                    case 'order':
                        dispatch(articlesActions.setOrder(value as Order))
                        break
                    case 'search':
                        dispatch(articlesActions.setSearch(value))
                        break
                }
            })
            dispatch(articlesActions.initState())
            void dispatch(fetchArticles({}))
        }
    },
)
