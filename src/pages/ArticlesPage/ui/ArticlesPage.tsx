import classNames from 'classnames'
import { ArticleList, type ArticleView } from 'entities/Article'
import { ArticleViewSwitcher } from 'features/ArticleViewSwitcher'
import { fetchNextArticle } from 'pages/ArticlesPage/model/services/fetchNextArticle/fetchNextArticle'
import { type FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type ReducersList, useDynamicModuleLoader } from 'shared/hooks/useDynamicModuleLoader'
import { useInitialEffect } from 'shared/hooks/useInitialEffect'
import { Text } from 'shared/ui/Text/Text'
import { Page } from 'widgets/Page'

import {
    getArticles,
    getArticlesError,
    getArticlesIsLoading,
    getArticlesView,
} from '../model/selectors/articleSelectors'
import { fetchArticles } from '../model/services/fetchArticles/fetchArticles'
import { articlesActions, articlesReducer } from '../model/slice/articlesSlice'
import styles from './ArticlesPage.module.scss'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articles: articlesReducer,
}

const ArticlesPage: FC<ArticlesPageProps> = memo(({ className }) => {
    const dispatch = useAppDispatch()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesIsLoading)
    const error = useSelector(getArticlesError)
    const view = useSelector(getArticlesView)

    useDynamicModuleLoader({ reducers })
    useInitialEffect(() => {
        dispatch(articlesActions.initState())
        void dispatch(fetchArticles({ page: 1 }))
    }, [dispatch])

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesActions.setView(view))
        },
        [dispatch],
    )

    const onLoadNextPart = useCallback(() => {
        void dispatch(fetchNextArticle())
    }, [dispatch])

    if (error) {
        return <Text text={error} />
    }
    return (
        <Page className={classNames(styles.page, className)} onScrollEnd={onLoadNextPart}>
            <ArticleViewSwitcher view={view} onViewClick={onChangeView} />
            <ArticleList articles={articles} view={view} isLoading={isLoading} />
        </Page>
    )
})
export default ArticlesPage
