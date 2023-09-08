import classNames from 'classnames'
import { getUserMounted, userActions } from 'entities/User'
import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from 'shared/config/theme'
import { Loader } from 'shared/ui/Loader/Loader'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import { AppRouter } from './providers/router'

const App = () => {
    const { theme } = useTheme()
    const dispatch = useDispatch()
    const mounted = useSelector(getUserMounted)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])
    return (
        <div className={classNames('app', theme)}>
            <Suspense fallback={<Loader />}>
                <Navbar />
                <div className={'content-page'}>
                    <Sidebar />
                    {mounted ? <AppRouter /> : null}
                </div>
            </Suspense>
        </div>
    )
}

export default App
