import classNames from 'classnames'
import { ArticleDetails } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { AddNewCommentForm } from 'features/AddNewComment'
import { type FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type ReducersList, useDynamicModuleLoader } from 'shared/hooks/useDynamicModuleLoader'
import { useInitialEffect } from 'shared/hooks/useInitialEffect'
import { Button } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'

import {
    getArticleDetailComments,
    getArticleDetailCommentsError,
    getArticleDetailCommentsIsLoading,
} from '../model/selectors/getArticleDetailComments'
import { addNewCommentArticle } from '../model/services/addNewCommentArticle/addNewCommentArticle'
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { articleDetailCommentsReducer } from '../model/slice/articleDetailCommentsSlice'
import styles from './ArticleDetailPage.module.scss'

interface ArticleDetailPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailCommentsReducer,
}

const ArticleDetailPage: FC<ArticleDetailPageProps> = memo(({ className }) => {
    const { id } = useParams<{ id: string }>()
    const comments = useSelector(getArticleDetailComments.selectAll)
    const isLoading = useSelector(getArticleDetailCommentsIsLoading)
    const error = useSelector(getArticleDetailCommentsError)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useDynamicModuleLoader({ reducers })
    useInitialEffect(() => {
        void dispatch(fetchCommentsByArticleId(String(id)))
        console.log('ok')
    }, [dispatch])

    const onSendComment = useCallback(
        (text: string) => {
            void dispatch(addNewCommentArticle(text))
        },
        [dispatch],
    )

    const onBack = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    if (!id) {
        return <div>Статья не найдена</div>
    }

    return (
        <div className={classNames(styles.page, className)}>
            <Button variant={'outline'} size={'small'} onClick={onBack}>
                Назад
            </Button>
            <ArticleDetails id={id} />
            <Text title={'Комментарий'} />
            <AddNewCommentForm onSendComment={onSendComment} />
            <CommentList isLoading={isLoading} comments={comments} />
        </div>
    )
})

export default ArticleDetailPage
