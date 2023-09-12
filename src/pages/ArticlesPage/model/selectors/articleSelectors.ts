import { type StateSchema } from 'app/providers/StoreProvider'

import { articlesAdapter } from '../adapter/articlesAdapter'

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articles ?? articlesAdapter.getInitialState(),
)

export const getArticlesIsLoading = (state: StateSchema) => state.articles?.isLoading ?? false

export const getArticlesError = (state: StateSchema) => state.articles?.error
export const getArticlesView = (state: StateSchema) => state.articles?.view ?? 'block'
export const getArticlesPage = (state: StateSchema) => state.articles?.page ?? 1
export const getArticlesPageLimit = (state: StateSchema) => state.articles?.limit ?? 9
export const getArticlesPageHasMore = (state: StateSchema) => state.articles?.hasMore
export const getArticlesInit = (state: StateSchema) => state.articles?.init ?? false
