import classNames from 'classnames'
import { type FC, type HTMLAttributes, type ReactNode } from 'react'

import styles from './Card.module.scss'

type CardVariant = 'normal' | 'outlined'
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    variant?: CardVariant
}

export const Card: FC<CardProps> = (props) => {
    const { className, variant = 'normal', children, ...otherProps } = props
    return (
        <div className={classNames(styles.card, className, styles[variant])} {...otherProps}>
            {children}
        </div>
    )
}
