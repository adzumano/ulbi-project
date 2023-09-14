import classNames from 'classnames'
import { type FC, memo } from 'react'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page'

import styles from './ArticleEditPage.module.scss'

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo(({ className }) => {
    const { id } = useParams()
    return <Page className={classNames(styles.ArticleEditPage, className)}>ArticleEditPage</Page>
})

export default ArticleEditPage
