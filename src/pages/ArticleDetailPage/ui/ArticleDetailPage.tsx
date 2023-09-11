import classNames from 'classnames'
import { ArticleDetails } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { fetchCommentsByArticleId } from 'pages/ArticleDetailPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { type FC, memo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type ReducersList, useDynamicModuleLoader } from 'shared/hooks/useDynamicModuleLoader'
import { useInitialEffect } from 'shared/hooks/useInitialEffect'
import { Text } from 'shared/ui/Text/Text'

import {
    getArticleDetailComments,
    getArticleDetailCommentsError,
    getArticleDetailCommentsIsLoading,
} from '../model/selectors/getArticleDetailComments'
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

    useDynamicModuleLoader({ reducers })
    useInitialEffect(() => {
        void dispatch(fetchCommentsByArticleId(String(id)))
        console.log('ok')
    }, [dispatch])

    if (!id) {
        return <div>Статья не найдена</div>
    }

    return (
        <div className={classNames(styles.page, className)}>
            <ArticleDetails id={id} />
            <Text title={'Комментарий'} />
            <CommentList isLoading={isLoading} comments={comments} />
        </div>
    )
})

export default ArticleDetailPage
