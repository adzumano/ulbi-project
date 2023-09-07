import classNames from 'classnames'
import { type FC, memo, useCallback } from 'react'
import { Select } from 'shared/ui/Select/Select'

import { Currency } from '../../model/types/currency'

interface CurrencySelectProps {
    className?: string
    value?: string
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
    { value: Currency.KZT, content: Currency.KZT },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
]
export const CurrencySelect: FC<CurrencySelectProps> = memo((props) => {
    const { className, value, onChange, readonly = false } = props

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency)
        },
        [onChange],
    )
    return (
        <Select
            className={classNames(className)}
            id={'currency'}
            name={'currency'}
            value={value}
            options={options}
            disabled={readonly}
            onChange={onChangeHandler}
        />
    )
})
