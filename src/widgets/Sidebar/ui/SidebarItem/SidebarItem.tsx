import classNames from 'classnames'
import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { type SidebarItemType } from 'widgets/Sidebar/model/item'

import styles from './SidebarItem.module.scss'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
}
export const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {
    const { t } = useTranslation()
    const { path, text, Icon } = item
    return (
        <AppLink
            className={classNames(styles.item, { [styles.collapsed]: collapsed })}
            to={path}
            variant={'secondary'}
        >
            <Icon className={styles.icon} />
            <span className={styles.link}>{t(text)}</span>
        </AppLink>
    )
})
