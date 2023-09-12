import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'

import {
    getArticlesIsLoading,
    getArticlesPage,
    getArticlesPageHasMore,
} from '../../selectors/articleSelectors'
import { articlesActions } from '../../slice/articlesSlice'
import { fetchArticles } from '../fetchArticles/fetchArticles'

export const fetchNextArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articles/fetchNextArticles',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI
        const hasMore = getArticlesPageHasMore(getState())
        const page = getArticlesPage(getState())
        const isLoading = getArticlesIsLoading(getState())

        if (hasMore && !isLoading) {
            const newPage = page + 1
            dispatch(articlesActions.setPage(newPage))
            void dispatch(fetchArticles({ page: newPage }))
        }
    },
)
