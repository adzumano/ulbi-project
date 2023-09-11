import { type EntityState } from '@reduxjs/toolkit'
import { type Comment } from 'entities/Comment'

export interface ArticleDetailCommentsSchema extends EntityState<Comment> {
    isLoading?: boolean
    error?: string
}
