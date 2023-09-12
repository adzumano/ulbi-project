import classNames from 'classnames'
import { type FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import ViewIcon from 'shared/assets/icons/view.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button } from 'shared/ui/Button/Button'
import { Card } from 'shared/ui/Card/Card'
import { Icon } from 'shared/ui/Icon/Icon'
import { Text } from 'shared/ui/Text/Text'

import { type Article, type ArticleTextBlock, type ArticleView } from '../../model/types/article'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import styles from './ArticleItem.module.scss'

interface ArticleItemProps {
    className?: string
    article: Article
    view: ArticleView
}

export const ArticleItem: FC<ArticleItemProps> = memo((props) => {
    const { className, article, view } = props

    const navigate = useNavigate()
    const onOpenArticle = useCallback(() => {
        navigate(`${RoutePath.articles}/${article.id}`)
    }, [navigate, article.id])

    const types = <Text className={styles.types} text={article.type.join(', ')} />
    const views = (
        <>
            <Text className={styles.views} text={String(article.views)} />
            <Icon Svg={ViewIcon} />
        </>
    )

    if (view === 'block') {
        const textBlock = article.blocks.find((block) => block.type === 'text') as ArticleTextBlock
        return (
            <div className={classNames(styles.item, className, styles[view])}>
                <Card className={styles.card}>
                    <div className={styles.header}>
                        <Avatar alt={article.user.username} size={30} src={article.user.avatar} />
                        <Text className={styles.username} text={article.user.username} />
                        <Text className={styles.date} text={article.createdAt} />
                    </div>
                    <Text className={styles.title} title={article.title} />
                    {types}
                    <img className={styles.img} src={article.img} alt={article.title} />
                    {textBlock ? (
                        <ArticleTextBlockComponent className={styles.textBlock} block={textBlock} />
                    ) : null}
                    <div className={styles.footer}>
                        <Button variant={'outline'} size={'small'} onClick={onOpenArticle}>
                            Читать далее...
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }
    return (
        <div className={classNames(styles.ArticleItem, className, styles[view])}>
            <Card className={styles.card} onClick={onOpenArticle}>
                <div className={styles.imgWrapper}>
                    <img className={styles.img} src={article.img} alt={article.title} />
                    <Text className={styles.date} text={article.createdAt} />
                </div>
                <div className={styles.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text className={styles.title} text={article.title} />
            </Card>
        </div>
    )
})
