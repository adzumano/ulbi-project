import classNames from 'classnames'
import { type ButtonHTMLAttributes, type FC } from 'react'

import styles from './Button.module.scss'

type ButtonVariant =
    | 'clear'
    | 'clearInverted'
    | 'primary'
    | 'outline'
    | 'background'
    | 'backgroundInverted'
    | 'outlineRed'

type ButtonSize = 'small' | 'medium' | 'large'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    square?: boolean
    size?: ButtonSize
}
export const Button: FC<ButtonProps> = (props) => {
    const { variant = 'primary', size = 'medium', square = false, className, children, ...otherProps } = props

    const mods: Record<string, boolean> = {
        [styles.square]: square,
    }
    return (
        <button
            className={classNames(styles.button, className, styles[variant], styles[size], mods)}
            {...otherProps}
        >
            {children}
        </button>
    )
}
