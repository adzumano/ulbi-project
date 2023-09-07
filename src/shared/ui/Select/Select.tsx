import classNames from 'classnames'
import { type ChangeEvent, type FC, type SelectHTMLAttributes, memo, useMemo } from 'react'

import styles from './Select.module.scss'

type ExcludedSelectProps = 'className' | 'options' | 'value' | 'onChange'
interface SelectOptions {
    value: string
    content: string
}
interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, ExcludedSelectProps> {
    className?: string
    options?: SelectOptions[]
    value?: string
    onChange?: (value: string) => void
}
export const Select: FC<SelectProps> = memo((props) => {
    const { className, options = [], value, onChange, ...otherProps } = props

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    const optionsList = useMemo(() => {
        return options.map(({ value, content }) => (
            <option key={value} className={styles.option} value={value}>
                {content}
            </option>
        ))
    }, [options])

    return (
        <select
            className={classNames(styles.select, className)}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
        >
            {optionsList}
        </select>
    )
})
