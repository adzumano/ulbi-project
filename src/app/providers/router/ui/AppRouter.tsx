import { getUserAuthData } from 'entities/User'
import { Suspense, memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'

import { routes } from '../config/routes'

export const AppRouter = memo(() => {
    const isAuth = useSelector(getUserAuthData)

    const routesList = useMemo(() => {
        return routes
            .filter(({ authOnly }) => !(authOnly && !isAuth))
            .map(({ path, element }) => (
                <Route key={path} path={path} element={<div className={'page-wrapper'}>{element}</div>} />
            ))
    }, [isAuth])
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{routesList}</Routes>
        </Suspense>
    )
})
