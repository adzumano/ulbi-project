import {
    type AnyAction,
    type CombinedState,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject,
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type ArticleDetailSchema } from 'entities/Article'
import { type ProfileSchema } from 'entities/Profile'
import { type UserSchema } from 'entities/User'
import { type AddNewCommentSchema } from 'features/AddNewComment'
import { type LoginSchema } from 'features/AuthByUsername'
import { type ArticleDetailCommentsSchema } from 'pages/ArticleDetailPage'
import { type ArticlesSchema } from 'pages/ArticlesPage'
import { type ScrollRestorationSchema } from 'widgets/Page'

export interface StateSchema {
    user: UserSchema
    scrollRestoration: ScrollRestorationSchema

    // Асинхронные редюсеры
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailSchema
    articleDetailsComments?: ArticleDetailCommentsSchema
    addNewComment?: AddNewCommentSchema
    articles?: ArticlesSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
