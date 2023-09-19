import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'
import { type SetURLSearchParams } from 'react-router-dom'

import {
    getArticlesOrder,
    getArticlesPage,
    getArticlesPageLimit,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
} from '../../selectors/articleSelectors'

interface FetchArticlesProps {
    replace?: boolean
    setSearchParams?: SetURLSearchParams
}
export const fetchArticles = createAsyncThunk<Article[], FetchArticlesProps, ThunkConfig<string>>(
    'articles/fetchArticles',
    async (props, thunkAPI) => {
        const { setSearchParams } = props
        const { extra, rejectWithValue, getState } = thunkAPI
        const limit = getArticlesPageLimit(getState())
        const page = getArticlesPage(getState())
        const sort = getArticlesSort(getState())
        const order = getArticlesOrder(getState())
        const search = getArticlesSearch(getState())
        const type = getArticlesType(getState())

        try {
            setSearchParams?.({
                search,
                order,
                sort,
                type,
            })
            const res = await extra.api.get('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === 'all' ? undefined : type,
                },
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
