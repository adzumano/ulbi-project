import classNames from 'classnames'
import { LangSwitcher } from 'features/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { type FC, useState } from 'react'

import styles from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}
export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onToggle = () => {
        setCollapsed((collapsed) => !collapsed)
    }
    return (
        <div className={classNames(styles.sidebar, className, { [styles.collapsed]: collapsed })}>
            <button onClick={onToggle}>Toggle</button>
            <div className={styles.switcher}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
