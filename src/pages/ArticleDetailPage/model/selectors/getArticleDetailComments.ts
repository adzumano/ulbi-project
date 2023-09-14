import { type StateSchema } from 'app/providers/StoreProvider'

import { articleDetailCommentsAdapter } from '../adapter/articleDetailCommentsAdapter/articleDetailCommentsAdapter'

export const getArticleDetailComments = articleDetailCommentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailGroup?.comments ?? articleDetailCommentsAdapter.getInitialState(),
)

export const getArticleDetailCommentsIsLoading = (state: StateSchema) =>
    state.articleDetailGroup?.comments?.isLoading

export const getArticleDetailCommentsError = (state: StateSchema) => state.articleDetailGroup?.comments?.error
