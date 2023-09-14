import { AboutPage } from 'pages/AboutPage'
import { ArticleCreatePage } from 'pages/ArticleCreatePage'
import { ArticleDetailPage } from 'pages/ArticleDetailPage'
import { ArticleEditPage } from 'pages/ArticleEditPage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { type RouteProps } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export const routes: AppRoutesProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />,
    },
    {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    {
        path: `${RoutePath.profile}/:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    {
        path: `${RoutePath.articles}/:id`,
        element: <ArticleDetailPage />,
        authOnly: true,
    },
    {
        path: `${RoutePath.articles}/create`,
        element: <ArticleCreatePage />,
        authOnly: true,
    },
    {
        path: `${RoutePath.articles}/:id/edit`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
]
