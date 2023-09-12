import { type Reducer } from '@reduxjs/toolkit'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { type StateSchemaKey } from 'app/providers/StoreProvider/types/schema'
import { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
    [key in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
}
export const useDynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { reducers, removeAfterUnmount = true } = props
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap()
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey]
            if (mounted !== reducer) {
                store.reducerManager.add(name as StateSchemaKey, reducer)
                dispatch({ type: `@INIT ${name} reducer` })
            }
        })
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, _]) => {
                    store.reducerManager.remove(name as StateSchemaKey)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }
        // eslint-disable-next-line
    }, [])
}
