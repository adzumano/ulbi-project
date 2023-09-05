import { type FC, memo } from 'react'

import { sidebarItemsList } from '../../model/item'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import styles from './SidebarList.module.scss'

interface SidebarListProps {
    collapsed: boolean
}
export const SidebarList: FC<SidebarListProps> = memo(({ collapsed }) => {
    return (
        <div className={styles.list}>
            {sidebarItemsList.map((item) => (
                <SidebarItem key={item.path} item={item} collapsed={collapsed} />
            ))}
        </div>
    )
})
