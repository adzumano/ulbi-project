import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { fetchArticles } from '../fetchArticles/fetchArticles'
import { fetchNextArticles } from './fetchNextArticles'

jest.mock('../fetchArticles/fetchArticles')

describe('fetchNextArticle', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            articles: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        })

        await thunk.callThunk()
        expect(thunk.dispatch).toBeCalledTimes(4)
        expect(fetchArticles).toHaveBeenCalledWith({ page: 3 })
    })
    test('not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            articles: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        })

        await thunk.callThunk()
        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticles).not.toHaveBeenCalledWith()
    })
    test('loading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            articles: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: true,
            },
        })

        await thunk.callThunk()
        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(fetchArticles).not.toHaveBeenCalledWith()
    })
})
