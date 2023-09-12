import { type FC, memo, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import styles from './SidebarList.module.scss'

interface SidebarListProps {
    collapsed: boolean
}
export const SidebarList: FC<SidebarListProps> = memo(({ collapsed }) => {
    const sidebarItemsList = useSelector(getSidebarItems)

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => <SidebarItem key={item.path} item={item} collapsed={collapsed} />),
        [collapsed, sidebarItemsList],
    )
    return <div className={styles.list}>{itemsList}</div>
})
