import classNames from 'classnames'
import { type FC, type LabelHTMLAttributes, type ReactNode, memo } from 'react'

import styles from './Label.module.scss'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    className?: string
    children: ReactNode
}
export const Label: FC<LabelProps> = memo((props) => {
    const { className, children, ...otherProps } = props
    return (
        <label className={classNames(styles.label, className)} {...otherProps}>
            {children}
        </label>
    )
})
