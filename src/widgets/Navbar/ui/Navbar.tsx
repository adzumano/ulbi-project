import classNames from 'classnames'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation()
    return (
        <nav className={classNames(styles.navbar, className)}>
            <div className={styles.links}></div>
        </nav>
    )
}
