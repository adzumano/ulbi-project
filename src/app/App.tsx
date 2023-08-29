import './styles/index.scss'
import classNames from "classnames";
import {useTheme} from "shared/config/theme";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";

const App = () => {
    const {theme} = useTheme()
    return (
        <div className={classNames('app', theme)}>
            <Suspense fallback={'...loading translates'}>
                <Navbar/>
                <div className={'content-page'}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;