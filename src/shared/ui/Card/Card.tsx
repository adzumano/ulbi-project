import classNames from 'classnames'
import { type FC, type HTMLAttributes, type ReactNode } from 'react'

import styles from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
}

export const Card: FC<CardProps> = (props) => {
    const { className, children, ...otherProps } = props
    return (
        <div className={classNames(styles.card, className)} {...otherProps}>
            {children}
        </div>
    )
}
