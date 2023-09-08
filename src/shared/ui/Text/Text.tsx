import classNames from 'classnames'
import { type FC, memo } from 'react'

import styles from './Text.module.scss'

type TextVariant = 'primary' | 'error'
type TextAlign = 'left' | 'center' | 'right'
type TextSize = 'small' | 'medium'
interface TextProps {
    className?: string
    title?: string
    text?: string
    variant?: TextVariant
    align?: TextAlign
    size?: TextSize
}
export const Text: FC<TextProps> = memo((props) => {
    const { className, title, text, variant = 'primary', align = 'left', size = 'small' } = props
    return (
        <div
            className={classNames(
                className,
                styles.textWrapper,
                styles[variant],
                styles[align],
                styles[size],
            )}
        >
            {title ? <p className={styles.title}>{title}</p> : null}
            {text ? <p className={styles.text}>{text}</p> : null}
        </div>
    )
})
