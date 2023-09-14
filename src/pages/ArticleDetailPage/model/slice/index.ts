import { combineReducers } from '@reduxjs/toolkit'

import { articleDetailCommentsReducer } from '../slice/articleDetailCommentsSlice'
import { articleDetailRecommendationReducer } from '../slice/articleDetailRecommendationSlice'
import { type ArticleDetailGroupSchema } from '../types'

export const articleDetailGroupReducer = combineReducers<ArticleDetailGroupSchema>({
    comments: articleDetailCommentsReducer,
    recommendations: articleDetailRecommendationReducer,
})
