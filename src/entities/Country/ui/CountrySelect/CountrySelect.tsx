import classNames from 'classnames'
import { type FC, memo, useCallback } from 'react'
import { Select } from 'shared/ui/Select/Select'

import { Country } from '../../model/types/country'

interface CountrySelectProps {
    className?: string
    value?: string
    onChange?: (value: Country) => void
    readonly?: boolean
}

const options = [
    { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.GERMANY, content: Country.GERMANY },
]
export const CountrySelect: FC<CountrySelectProps> = memo((props) => {
    const { className, value, onChange, readonly } = props

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country)
        },
        [onChange],
    )
    return (
        <Select
            className={classNames(className)}
            id={'country'}
            name={'country'}
            value={value}
            options={options}
            disabled={readonly}
            onChange={onChangeHandler}
        />
    )
})
