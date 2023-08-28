import {Link, Route, Routes} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {Suspense, useContext, useState} from "react";
import './styles/index.scss'
import classNames from "classnames";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', theme)}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/about'}>About</Link>
            <Link to={'/main'}>Main</Link>
            <Suspense fallback={'...loading'}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy/>}/>
                    <Route path={'/main'} element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;