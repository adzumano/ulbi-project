import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'

import { routes } from '../config/routes'

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route key={path} path={path} element={<div className={'page-wrapper'}>{element}</div>} />
                ))}
            </Routes>
        </Suspense>
    )
}
