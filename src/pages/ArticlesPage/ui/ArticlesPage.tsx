import classNames from 'classnames'
import { ArticleList, type ArticleView } from 'entities/Article'
import { ArticleViewSwitcher } from 'features/ArticleViewSwitcher'
import { type FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type ReducersList, useDynamicModuleLoader } from 'shared/hooks/useDynamicModuleLoader'
import { useInitialEffect } from 'shared/hooks/useInitialEffect'
import { Text } from 'shared/ui/Text/Text'

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
    console.log(view)
    useDynamicModuleLoader({ reducers })
    useInitialEffect(() => {
        void dispatch(fetchArticles())
        dispatch(articlesActions.initState())
    }, [dispatch])

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesActions.setView(view))
        },
        [dispatch],
    )

    if (error) {
        return <Text text={error} />
    }
    return (
        <div className={classNames(styles.page, className)}>
            <ArticleViewSwitcher view={view} onViewClick={onChangeView} />
            <ArticleList articles={articles} view={view} isLoading={isLoading} />
        </div>
    )
})
export default ArticlesPage
