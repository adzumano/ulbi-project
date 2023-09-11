import { type CombinedState, type Reducer, type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { $api } from 'shared/api/api'

import { type StateSchema } from '../types/schema'
import { createReducerManager } from './reducerManager'

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: _IS_DEV_,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                    },
                },
            }),
    })

    // eslint-disable-next-line
    // @ts-ignore
    store.reducerManager = reducerManager
    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
