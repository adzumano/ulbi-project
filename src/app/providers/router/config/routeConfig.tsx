import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

enum AppRoutes {
    MAIN='main',
    ABOUT='about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routes: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage/>
    },
    {
        path: RoutePath.about,
        element: <AboutPage/>
    }
]