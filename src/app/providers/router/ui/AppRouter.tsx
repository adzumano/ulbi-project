import {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../config/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={'...loading'}>
            <Routes>
                {routes.map(({path, element}) => (
                    <Route key={path} path={path} element={(<div className={'page-wrapper'}>{element}</div>)}/>
                ))}
            </Routes>
        </Suspense>
    );
};

