import { type EntityState } from '@reduxjs/toolkit'
import { type Article, type ArticleType, type ArticleView, type ArticlesSortField } from 'entities/Article'
import { type Order } from 'shared/types/order'

export interface ArticlesSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string
    view: ArticleView
    page: number
    limit: number
    hasMore: boolean
    init?: boolean
    order: Order
    sort: ArticlesSortField
    search: string
    type: ArticleType
}
