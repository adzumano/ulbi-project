import classNames from 'classnames'
import { type ArticlesSortField } from 'entities/Article'
import { type FC, memo } from 'react'
import { Label } from 'shared/ui/Label/Label'
import { Select, type SelectOptions } from 'shared/ui/Select/Select'

import styles from './ArticleSortSelect.module.scss'

interface ArticleSortSelectProps {
    className?: string
    sort: ArticlesSortField
    onChangeSort: (sort: ArticlesSortField) => void
}

const sortFieldOptions: Array<SelectOptions<ArticlesSortField>> = [
    {
        value: 'createdAt',
        content: 'Дата создание',
    },
    {
        value: 'title',
        content: 'Название',
    },
    {
        value: 'views',
        content: 'Просмотрам',
    },
]

export const ArticleSortSelect: FC<ArticleSortSelectProps> = memo((props) => {
    const { className, sort, onChangeSort } = props
    return (
        <div className={classNames(styles.selectWrapper, className)}>
            <Label className={styles.label}>ПО:</Label>
            <Select
                id={'sort'}
                name={'sort'}
                value={sort}
                options={sortFieldOptions}
                onChange={onChangeSort}
            />
        </div>
    )
})
