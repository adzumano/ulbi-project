import classNames from 'classnames'
import { type FC, memo } from 'react'

import styles from './Text.module.scss'

type TextVariant = 'primary' | 'error'
interface TextProps {
    className?: string
    title?: string
    text?: string
    variant?: TextVariant
}
export const Text: FC<TextProps> = memo((props) => {
    const { className, title, text, variant = 'primary' } = props
    return (
        <div className={classNames(className, styles.textWrapper, styles[variant])}>
            {title ? <p className={styles.title}>{title}</p> : null}
            {text ? <p className={styles.text}>{text}</p> : null}
        </div>
    )
})
