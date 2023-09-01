import { AppRouter } from 'app/providers/router'
import classNames from 'classnames'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {
    return (
        <div className={classNames('app')}>
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
