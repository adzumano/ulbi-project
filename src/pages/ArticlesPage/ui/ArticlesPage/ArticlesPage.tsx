import classNames from 'classnames'
import { ArticleList } from 'entities/Article'
import { type FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
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
} from '../../model/selectors/articleSelectors'
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles'
import { initArticles } from '../../model/services/initArticles/initArticles'
import { articlesReducer } from '../../model/slice/articlesSlice'
import { ArticleFilters } from '../ArticleFilters/ArticleFilters'
import styles from './ArticlesPage.module.scss'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articles: articlesReducer,
}

const ArticlesPage: FC<ArticlesPageProps> = memo(({ className }) => {
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesIsLoading)
    const error = useSelector(getArticlesError)
    const view = useSelector(getArticlesView)

    useDynamicModuleLoader({ reducers, removeAfterUnmount: false })
    useInitialEffect(() => {
        void dispatch(initArticles(searchParams))
    }, [dispatch])

    const onLoadNextPart = useCallback(() => {
        void dispatch(fetchNextArticles())
    }, [dispatch])

    if (error) {
        return <Text text={error} />
    }
    return (
        <Page className={classNames(styles.page, className)} onScrollEnd={onLoadNextPart}>
            <ArticleFilters />
            <ArticleList className={styles.list} articles={articles} view={view} isLoading={isLoading} />
        </Page>
    )
})
export default ArticlesPage
