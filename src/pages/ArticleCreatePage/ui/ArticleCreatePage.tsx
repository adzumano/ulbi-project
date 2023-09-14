import classNames from 'classnames'
import { type FC, memo } from 'react'

import styles from './ArticleCreatePage.module.scss'

interface ArticleCreatePageProps {
    className?: string
}

const ArticleCreatePage: FC<ArticleCreatePageProps> = memo(({ className }) => {
    return <div className={classNames(styles.ArticleCreatePage, className)}>ArticleCreatePage</div>
})

export default ArticleCreatePage
