import classNames from 'classnames'
import { type ArticleType, type ArticleView, type ArticlesSortField } from 'entities/Article'
import { ArticleOrderSelect } from 'features/ArticleOrderSelect'
import { ArticleSearch } from 'features/ArticleSearch'
import { ArticleSortSelect } from 'features/ArticleSortSelect'
import { ArticleTypeFilter } from 'features/ArticleTypeFilter'
import { ArticleViewSwitcher } from 'features/ArticleViewSwitcher'
import { type FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useDebounce } from 'shared/hooks/useDebounce'
import { type Order } from 'shared/types/order'
import { type TabItem } from 'shared/ui/Tabs/Tabs'

import {
    getArticlesOrder,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
    getArticlesView,
} from '../../model/selectors/articleSelectors'
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles'
import { articlesActions } from '../../model/slice/articlesSlice'
import styles from './ArticleFilters.module.scss'

interface ArticleFiltersProps {
    className?: string
}

export const ArticleFilters: FC<ArticleFiltersProps> = memo(({ className }) => {
    const dispatch = useAppDispatch()
    const [, setSearchParams] = useSearchParams()
    const view = useSelector(getArticlesView)
    const sort = useSelector(getArticlesSort)
    const order = useSelector(getArticlesOrder)
    const search = useSelector(getArticlesSearch)
    const type = useSelector(getArticlesType)

    const fetchData = useCallback(() => {
        void dispatch(fetchArticles({ replace: true, setSearchParams }))
    }, [dispatch, setSearchParams])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesActions.setView(view))
        },
        [dispatch],
    )

    const onChangeSort = useCallback(
        (sort: ArticlesSortField) => {
            dispatch(articlesActions.setSort(sort))
            dispatch(articlesActions.setPage(1))
            debouncedFetchData()
        },
        [dispatch, debouncedFetchData],
    )

    const onChangeOrder = useCallback(
        (order: Order) => {
            dispatch(articlesActions.setOrder(order))
            dispatch(articlesActions.setPage(1))
            debouncedFetchData()
        },
        [dispatch, debouncedFetchData],
    )

    const onChangeSearch = useCallback(
        (value: string) => {
            dispatch(articlesActions.setSearch(value))
            dispatch(articlesActions.setPage(1))
            debouncedFetchData()
        },
        [dispatch, debouncedFetchData],
    )

    const onChangeType = useCallback(
        (tab: TabItem<ArticleType>) => {
            dispatch(articlesActions.setType(tab.value))
            dispatch(articlesActions.setPage(1))
            debouncedFetchData()
        },
        [dispatch, debouncedFetchData],
    )
    return (
        <div className={classNames(styles.filters, className)}>
            <div className={styles.sortWrapper}>
                <div>
                    <ArticleOrderSelect order={order} onChangeOrder={onChangeOrder} />
                    <ArticleSortSelect sort={sort} onChangeSort={onChangeSort} />
                </div>
                <ArticleViewSwitcher view={view} onViewClick={onChangeView} />
            </div>
            <ArticleSearch search={search} onChangeSearch={onChangeSearch} />
            <ArticleTypeFilter type={type} onChangeType={onChangeType} />
        </div>
    )
})
