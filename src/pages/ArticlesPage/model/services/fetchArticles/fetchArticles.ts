import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/articleSelectors'

interface FetchArticlesProps {
    page?: number
}
export const fetchArticles = createAsyncThunk<Article[], FetchArticlesProps, ThunkConfig<string>>(
    'articles/fetchArticles',
    async (props, thunkAPI) => {
        const { page = 1 } = props
        const { extra, rejectWithValue, getState } = thunkAPI
        const limit = getArticlesPageLimit(getState())

        try {
            const res = await extra.api.get('/articles', {
                params: { _expand: 'user', _limit: limit, _page: page },
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
