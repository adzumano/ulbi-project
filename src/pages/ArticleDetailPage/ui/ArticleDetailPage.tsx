import classNames from 'classnames'
import { ArticleDetails } from 'entities/Article'
import { type FC, memo } from 'react'
import { useParams } from 'react-router-dom'

import styles from './ArticleDetailPage.module.scss'

interface ArticleDetailPageProps {
    className?: string
}

const ArticleDetailPage: FC<ArticleDetailPageProps> = memo(({ className }) => {
    const { id } = useParams<{ id: string }>()
    console.log(id)

    if (!id) {
        return <div>Статья не найдена</div>
    }
    return (
        <div className={classNames(styles.page, className)}>
            <ArticleDetails id={id} />
        </div>
    )
})

export default ArticleDetailPage
