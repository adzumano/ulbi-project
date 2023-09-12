import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'

import { getArticlesInit } from '../../selectors/articleSelectors'
import { articlesActions } from '../../slice/articlesSlice'
import { fetchArticles } from '../fetchArticles/fetchArticles'

export const initArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articles/initArticles',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI
        const isInit = getArticlesInit(getState())

        if (!isInit) {
            dispatch(articlesActions.initState())
            void dispatch(fetchArticles({ page: 1 }))
        }
    },
)
