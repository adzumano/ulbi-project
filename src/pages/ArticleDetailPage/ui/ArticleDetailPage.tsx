import classNames from 'classnames'
import { type FC, memo } from 'react'

import styles from './ArticleDetailPage.module.scss'

interface ArticleDetailPageProps {
    className?: string
}

const ArticleDetailPage: FC<ArticleDetailPageProps> = memo(({ className }) => {
    return <div className={classNames(styles.page, className)}>ArticleDetailPage</div>
})

export default ArticleDetailPage
