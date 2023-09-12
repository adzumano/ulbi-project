import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entities/User'
import AboutIcon from 'shared/assets/icons/about.svg'
import ArticlesIcon from 'shared/assets/icons/articles.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

import { type SidebarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(getUserAuthData, (authData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.main,
            Icon: MainIcon,
            text: 'main',
        },
        {
            path: RoutePath.about,
            Icon: AboutIcon,
            text: 'about',
        },
    ]

    if (authData) {
        sidebarItemsList.push(
            {
                path: `${RoutePath.profile}/${authData.id}`,
                Icon: ProfileIcon,
                text: 'profile',
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                Icon: ArticlesIcon,
                text: 'article',
                authOnly: true,
            },
        )
    }

    return sidebarItemsList
})
