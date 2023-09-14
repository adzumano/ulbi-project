import { type StateSchema } from 'app/providers/StoreProvider'

import { articleDetailRecommendationAdapter } from '../adapter/articleDetailRecommendationAdapter/articleDetailRecommendationAdapter'

export const getArticleDetailRecommendations = articleDetailRecommendationAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articleDetailGroup?.recommendations ?? articleDetailRecommendationAdapter.getInitialState(),
)

export const getArticleDetailRecommendationsIsLoading = (state: StateSchema) =>
    state.articleDetailGroup?.recommendations?.isLoading

export const getArticleDetailRecommendationsError = (state: StateSchema) =>
    state.articleDetailGroup?.recommendations?.error
