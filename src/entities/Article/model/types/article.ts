import { type User } from 'entities/User'

export type ArticleBlockType = 'text' | 'code' | 'image'
export interface ArticleBlockBase {
    id: string
    type: ArticleBlockType
}
export interface ArticleCodeBlock extends ArticleBlockBase {
    type: 'code'
    code: string
}
export interface ArticleImageBlock extends ArticleBlockBase {
    type: 'image'
    src: string
    title?: string
}
export interface ArticleTextBlock extends ArticleBlockBase {
    type: 'text'
    title?: string
    paragraphs: string[]
}

export type ArticleType = 'IT' | 'SCIENCE' | 'ECONOMICS'
export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export type ArticleView = 'grid' | 'block'

export interface Article {
    id: string
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    type: ArticleType[]
    user: User
    blocks: ArticleBlock[]
}
