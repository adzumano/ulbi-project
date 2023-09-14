import classNames from 'classnames'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { AddNewCommentForm } from 'features/AddNewComment'
import { type FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type ReducersList, useDynamicModuleLoader } from 'shared/hooks/useDynamicModuleLoader'
import { useInitialEffect } from 'shared/hooks/useInitialEffect'
import { Text } from 'shared/ui/Text/Text'
import { Page } from 'widgets/Page'

import {
    getArticleDetailComments,
    getArticleDetailCommentsIsLoading,
} from '../model/selectors/getArticleDetailComments'
import {
    getArticleDetailRecommendations,
    getArticleDetailRecommendationsIsLoading,
} from '../model/selectors/getArticleDetailRecommendations'
import { addNewCommentArticle } from '../model/services/addNewCommentArticle/addNewCommentArticle'
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { articleDetailGroupReducer } from '../model/slice'
import styles from './ArticleDetailPage.module.scss'
import { ArticleDetailPageHeader } from './ArticleDetailPageHeader/ArticleDetailPageHeader'

interface ArticleDetailPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailGroup: articleDetailGroupReducer,
}

const ArticleDetailPage: FC<ArticleDetailPageProps> = memo(({ className }) => {
    const { id } = useParams<{ id: string }>()
    const comments = useSelector(getArticleDetailComments.selectAll)
    const isLoading = useSelector(getArticleDetailCommentsIsLoading)
    const recommendations = useSelector(getArticleDetailRecommendations.selectAll)
    const recommendationsIsLoading = useSelector(getArticleDetailRecommendationsIsLoading)
    // const error = useSelector(getArticleDetailCommentsError)
    const dispatch = useAppDispatch()

    useDynamicModuleLoader({ reducers })
    useInitialEffect(() => {
        void dispatch(fetchCommentsByArticleId(String(id)))
        void dispatch(fetchArticleRecommendations())
    }, [dispatch])

    const onSendComment = useCallback(
        (text: string) => {
            void dispatch(addNewCommentArticle(text))
        },
        [dispatch],
    )

    if (!id) {
        return <div>Статья не найдена</div>
    }

    return (
        <Page className={classNames(styles.page, className)}>
            <ArticleDetailPageHeader />
            <ArticleDetails id={id} />
            <Text title={'Рекомендуем'} />
            <ArticleList
                className={styles.recommendations}
                articles={recommendations}
                isLoading={recommendationsIsLoading}
                view={'grid'}
                target={'_blank'}
            />
            <Text title={'Комментарий'} />
            <AddNewCommentForm onSendComment={onSendComment} />
            <CommentList isLoading={isLoading} comments={comments} />
        </Page>
    )
})

export default ArticleDetailPage
