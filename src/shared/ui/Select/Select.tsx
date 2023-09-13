import classNames from 'classnames'
import { type ChangeEvent, type SelectHTMLAttributes, useMemo } from 'react'

import { typedMemo } from '../../lib/helpers/typedMemo/typedMemo'
import styles from './Select.module.scss'

type ExcludedSelectProps = 'className' | 'options' | 'value' | 'onChange'
export interface SelectOptions<T extends string> {
    value: T
    content: string
}
interface SelectProps<T extends string>
    extends Omit<SelectHTMLAttributes<HTMLSelectElement>, ExcludedSelectProps> {
    className?: string
    options?: Array<SelectOptions<T>>
    value?: T
    onChange?: (value: T) => void
}
const SelectComponent = <T extends string>(props: SelectProps<T>) => {
    const { className, options = [], value, onChange, ...otherProps } = props

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T)
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
}

export const Select = typedMemo(SelectComponent)
