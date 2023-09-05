import { type SVGProps, type VFC } from 'react'
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export interface SidebarItemType {
    path: string
    text: string
    Icon: VFC<SVGProps<SVGSVGElement>>
}

export const sidebarItemsList: SidebarItemType[] = [
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
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'profile',
    },
]
