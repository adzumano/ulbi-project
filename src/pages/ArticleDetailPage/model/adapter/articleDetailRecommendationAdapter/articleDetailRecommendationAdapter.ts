import { createEntityAdapter } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article'

export const articleDetailRecommendationAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
})
