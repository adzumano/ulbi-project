import classNames from 'classnames'
import { type ArticleType } from 'entities/Article'
import { type FC, memo } from 'react'
import { type TabItem, Tabs } from 'shared/ui/Tabs/Tabs'

import styles from './ArticleTypeFilter.module.scss'

interface ArticleTypeFilterProps {
    className?: string
    type: ArticleType
    onChangeType: (tab: TabItem<ArticleType>) => void
}

const tabs: Array<TabItem<ArticleType>> = [
    { value: 'all', content: 'ALL' },
    { value: 'it', content: 'IT' },
    { value: 'science', content: 'SCIENCE' },
    { value: 'economics', content: 'ECONOMICS' },
]
export const ArticleTypeFilter: FC<ArticleTypeFilterProps> = memo((props) => {
    const { className, type, onChangeType } = props
    return (
        <div className={classNames(styles.filter, className)}>
            <Tabs tabs={tabs} value={type} onChange={onChangeType} />
        </div>
    )
})
