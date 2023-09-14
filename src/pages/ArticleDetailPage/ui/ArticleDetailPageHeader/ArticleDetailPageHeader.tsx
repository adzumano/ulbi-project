import classNames from 'classnames'
import { getArticleDetailsData } from 'entities/Article'
import { type FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Button } from 'shared/ui/Button/Button'

import { getCanEditArticle } from '../../model/selectors/article'
import styles from './ArticleDetailPageHeader.module.scss'

interface ArticleDetailPageHeaderProps {
    className?: string
}
export const ArticleDetailPageHeader: FC<ArticleDetailPageHeaderProps> = memo(({ className }) => {
    const navigate = useNavigate()
    // const userData = useSelector(getUserAuthData)
    const article = useSelector(getArticleDetailsData)
    const canEdit = useSelector(getCanEditArticle)

    const onBack = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.articles}/${article?.id}/edit`)
    }, [navigate, article?.id])
    return (
        <div className={classNames(styles.header, className)}>
            <Button variant={'outline'} size={'small'} onClick={onBack}>
                Назад
            </Button>
            {canEdit ? (
                <Button className={styles.editBtn} variant={'outline'} size={'small'} onClick={onEditArticle}>
                    Редактировать
                </Button>
            ) : null}
        </div>
    )
})
