import classNames from 'classnames'
import { type FC, memo } from 'react'

import styles from './Text.module.scss'

type TextVariant = 'primary' | 'error'
type TextAlign = 'left' | 'center' | 'right'
interface TextProps {
    className?: string
    title?: string
    text?: string
    variant?: TextVariant
    align?: TextAlign
}
export const Text: FC<TextProps> = memo((props) => {
    const { className, title, text, variant = 'primary', align = 'left' } = props
    return (
        <div className={classNames(className, styles.textWrapper, styles[variant], styles[align])}>
            {title ? <p className={styles.title}>{title}</p> : null}
            {text ? <p className={styles.text}>{text}</p> : null}
        </div>
    )
})
