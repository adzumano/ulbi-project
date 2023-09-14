import { type ArticleDetailCommentsSchema } from './articleDetailCommentsSchema'
import { type ArticleDetailRecommendationSchema } from './articleDetailRecommendationSchema'

export interface ArticleDetailGroupSchema {
    comments: ArticleDetailCommentsSchema
    recommendations: ArticleDetailRecommendationSchema
}
