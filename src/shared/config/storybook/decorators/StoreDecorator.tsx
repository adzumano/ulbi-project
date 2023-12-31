import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type StoryObj } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { articleDetailsReducer } from 'entities/Article'
import { profileReducer } from 'entities/Profile'
import { addNewCommentReducer } from 'features/AddNewComment'
import { loginReducer } from 'features/AuthByUsername'
import { articleDetailGroupReducer } from 'pages/ArticleDetailPage'
import { type FC } from 'react'
import { type ReducersList } from 'shared/hooks/useDynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailGroup: articleDetailGroupReducer,
    addNewComment: addNewCommentReducer,
}
export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => {
    return (Story: FC<StoryObj>) => {
        return (
            <StoreProvider initialState={state} asyncReducers={{ ...asyncReducers, ...defaultAsyncReducers }}>
                <Story />
            </StoreProvider>
        )
    }
}
