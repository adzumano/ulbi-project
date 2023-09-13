import classNames from 'classnames'
import { type FC, memo } from 'react'
import { Text } from 'shared/ui/Text/Text'

import { type Article, type ArticleView } from '../../model/types/article'
import { ArticleItem } from '../ArticleItem/ArticleItem'
import { ArticleItemSkeleton } from '../ArticleItem/ArticleItemSkeleton'
import styles from './ArticleList.module.scss'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === 'grid' ? 9 : 3)
        .fill(0)
        .map((_, index) => <ArticleItemSkeleton className={styles.card} key={index} view={view} />)

export const ArticleList: FC<ArticleListProps> = memo((props) => {
    const { className, articles = [], view = 'block', isLoading = false } = props

    const renderArticle = (article: Article) => (
        <ArticleItem key={article.id} className={styles.card} article={article} view={view} />
    )

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(styles.list, className, styles[view])}>
                <Text title={'Статьи не найдены'} size={'medium'} />
            </div>
        )
    }

    return (
        <div className={classNames(styles.list, className, styles[view])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading ? getSkeletons(view) : null}
        </div>
    )
})
