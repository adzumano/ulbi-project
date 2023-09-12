import classNames from 'classnames'
import { type FC, memo } from 'react'

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

    if (isLoading) {
        return <div className={classNames(styles.list, className, styles[view])}>{getSkeletons(view)}</div>
    }

    const renderArticle = (article: Article) => (
        <ArticleItem key={article.id} className={styles.card} article={article} view={view} />
    )

    return (
        <div className={classNames(styles.list, className, styles[view])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
        </div>
    )
})
