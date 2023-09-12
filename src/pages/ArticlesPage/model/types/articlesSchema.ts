import { type EntityState } from '@reduxjs/toolkit'
import { type Article, type ArticleView } from 'entities/Article'

export interface ArticlesSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string
    view: ArticleView
    page: number
    limit?: number
    hasMore: boolean
}
