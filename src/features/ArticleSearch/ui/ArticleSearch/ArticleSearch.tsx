import classNames from 'classnames'
import { type ChangeEvent, type FC, memo, useCallback } from 'react'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'

import styles from './ArticleSearch.module.scss'

interface ArticleSearchProps {
    className?: string
    search: string
    onChangeSearch: (value: string) => void
}

export const ArticleSearch: FC<ArticleSearchProps> = memo((props) => {
    const { className, search, onChangeSearch } = props

    const onChangeSearchHandler = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            onChangeSearch(e.target.value)
        },
        [onChangeSearch],
    )
    return (
        <Card className={classNames(styles.search, className)}>
            <Input placeholder={'Поиск...'} value={search} onChange={onChangeSearchHandler} />
        </Card>
    )
})
