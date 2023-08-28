import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import './styles/index.scss'
import classNames from "classnames";
import {useTheme} from "shared/config/theme";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', theme)}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/about'}>About</Link>
            <Link to={'/main'}>Main</Link>
            <Suspense fallback={'...loading'}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/main'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;