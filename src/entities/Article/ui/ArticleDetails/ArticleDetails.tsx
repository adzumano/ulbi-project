import classNames from 'classnames'
import { ArticleCodeBlockComponent } from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
import { type FC, memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import ViewIcon from 'shared/assets/icons/view.svg'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type ReducersList, useDynamicModuleLoader } from 'shared/hooks/useDynamicModuleLoader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Icon } from 'shared/ui/Icon/Icon'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Text } from 'shared/ui/Text/Text'

import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetailsData'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { ArticleBlock } from '../../model/types/article'
import styles from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo(({ className, id }) => {
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const error = useSelector(getArticleDetailsError)
    const article = useSelector(getArticleDetailsData)

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case 'code':
                return <ArticleCodeBlockComponent className={styles.block} block={block} />
            case 'text':
                return <ArticleTextBlockComponent className={styles.block} block={block} />
            case 'image':
                return <ArticleImageBlockComponent className={styles.block} block={block} />
            default:
                return null
        }
    }, [])

    useDynamicModuleLoader({ reducers })
    useEffect(() => {
        if (_PROJECT_ !== 'storybook') {
            void dispatch(fetchArticleById(id))
        }
    }, [id, dispatch])

    let content

    if (isLoading) {
        content = (
            <div>
                <Skeleton className={styles.avatar} width={200} height={200} borderRadius={'50%'} />
                <Skeleton className={styles.title} width={300} height={32} />
                <Skeleton className={styles.skeleton} width={600} height={24} />
                <Skeleton className={styles.skeleton} width={'100%'} height={200} />
                <Skeleton className={styles.skeleton} width={'100%'} height={200} />
            </div>
        )
    } else if (error) {
        content = <Text text={'Произошла ошибка при загрузке статьи'} align={'center'} />
    } else {
        content = (
            <>
                <div className={styles.avatarWrapper}>
                    <Avatar
                        className={styles.avatar}
                        size={200}
                        src={article?.img}
                        alt={article?.title ?? 'avatar'}
                        objectFit={'cover'}
                    />
                </div>
                <Text size={'medium'} title={article?.title} text={article?.subtitle} />
                <div className={styles.articleInfo}>
                    <Icon className={styles.icon} Svg={ViewIcon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={styles.articleInfo}>
                    <Icon className={styles.icon} Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        )
    }
    return <div className={classNames(styles.details, className)}>{content}</div>
})
