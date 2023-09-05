import classNames from 'classnames'
import { LangSwitcher } from 'features/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { type FC, memo, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { SidebarList } from 'widgets/Sidebar/ui/SidebarList/SidebarList'

import styles from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}
export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const onToggle = () => {
        setCollapsed((collapsed) => !collapsed)
    }
    return (
        <div
            className={classNames(styles.sidebar, className, { [styles.collapsed]: collapsed })}
            data-testid="sidebar"
        >
            <Button
                className={styles.collapsedBtn}
                variant={'backgroundInverted'}
                data-testid="sidebar-toggle"
                square
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <SidebarList collapsed={collapsed} />
            <div className={styles.switcher}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    )
})
