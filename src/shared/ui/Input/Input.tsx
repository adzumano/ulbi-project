import classNames from 'classnames'
import { type FC, type InputHTMLAttributes, memo } from 'react'

import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}
export const Input: FC<InputProps> = memo((props) => {
    const { className, ...otherProps } = props
    return <input className={classNames(styles.input, className)} {...otherProps} />
})
