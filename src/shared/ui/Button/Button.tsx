import classNames from 'classnames'
import { type ButtonHTMLAttributes, type FC } from 'react'

import styles from './Button.module.scss'

type ButtonVariant = 'clear' | 'primary' | 'outline'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
}
export const Button: FC<ButtonProps> = (props) => {
    const { variant = 'primary', className, children, ...otherProps } = props
    return (
        <button className={classNames(styles.button, className, styles[variant])} {...otherProps}>
            {children}
        </button>
    )
}
