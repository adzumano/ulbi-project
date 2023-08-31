import { AppRouter } from 'app/providers/router'
import classNames from 'classnames'
import { Suspense } from 'react'
import { useTheme } from 'shared/config/theme'
import { Loader } from 'shared/ui/Loader/Loader'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {
    const { theme } = useTheme()
    return (
        <div className={classNames('app', theme)}>
            <Suspense fallback={<Loader />}>
                <Navbar />
                <div className={'content-page'}>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
