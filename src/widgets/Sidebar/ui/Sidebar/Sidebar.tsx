import { RoutePath } from 'app/providers/router/config/routeConfig'
import classNames from 'classnames'
import { LangSwitcher } from 'features/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'

import styles from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}
export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const { t } = useTranslation()
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
            <div className={styles.items}>
                <AppLink className={styles.item} to={RoutePath.main} variant={'secondary'}>
                    <MainIcon className={styles.icon} />
                    <span className={styles.link}>{t('main')}</span>
                </AppLink>
                <AppLink className={styles.item} to={RoutePath.about} variant={'secondary'}>
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}> {t('about')}</span>
                </AppLink>
            </div>
            <div className={styles.switcher}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    )
}
