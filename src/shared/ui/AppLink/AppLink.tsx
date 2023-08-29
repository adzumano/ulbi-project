import classNames from 'classnames'
import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

import styles from './AppLink.module.scss'

type AppLinkVariant = 'primary' | 'secondary'
interface AppLinkProps extends LinkProps {
    className?: string
    variant?: AppLinkVariant
}
export const AppLink: FC<AppLinkProps> = (props) => {
    const { variant = 'primary', className, children, ...otherProps } = props
    return (
        <Link className={classNames(styles.appLink, className, styles[variant])} {...otherProps}>
            {children}
        </Link>
    )
}
