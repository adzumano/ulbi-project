import { RequireAuth } from 'app/providers/router/ui/RequireAuth'
import { Suspense, memo, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'

import { type AppRoutesProps, routes } from '../config/routes'

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback(({ path, element, authOnly }: AppRoutesProps) => {
        const elementWrapper = <>{element}</>
        return (
            <Route
                key={path}
                path={path}
                element={authOnly ? <RequireAuth>{elementWrapper}</RequireAuth> : elementWrapper}
            />
        )
    }, [])
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{routes.map(renderWithWrapper)}</Routes>
        </Suspense>
    )
})
