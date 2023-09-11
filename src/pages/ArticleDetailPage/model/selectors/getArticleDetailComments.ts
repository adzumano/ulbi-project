import { type StateSchema } from 'app/providers/StoreProvider'

import { articleDetailCommentsAdapter } from '../adapter/articleDetailCommentsAdapter/articleDetailCommentsAdapter'

export const getArticleDetailComments = articleDetailCommentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments ?? articleDetailCommentsAdapter.getInitialState(),
)

export const getArticleDetailCommentsIsLoading = (state: StateSchema) =>
    state.articleDetailsComments?.isLoading

export const getArticleDetailCommentsError = (state: StateSchema) => state.articleDetailsComments?.error
