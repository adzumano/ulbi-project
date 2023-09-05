import classNames from 'classnames'
import { type FC, type InputHTMLAttributes } from 'react'

import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}
export const Input: FC<InputProps> = (props) => {
    const { className, ...otherProps } = props
    return <input className={classNames(styles.input, className)} {...otherProps} />
}
