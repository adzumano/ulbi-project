import classNames from 'classnames'
import { type FC, memo } from 'react'
import { Card } from 'shared/ui/Card/Card'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

import { type ArticleView } from '../../model/types/article'
import styles from './ArticleItem.module.scss'

interface ArticleItemSkeletonProps {
    className?: string
    view: ArticleView
}
export const ArticleItemSkeleton: FC<ArticleItemSkeletonProps> = memo((props) => {
    const { className, view } = props

    if (view === 'block') {
        return (
            <div className={classNames(styles.item, className, styles[view])}>
                <Card className={styles.card}>
                    <div className={styles.header}>
                        <Skeleton borderRadius={'50%'} width={30} height={30} />
                        <Skeleton className={styles.username} width={150} height={16} />
                        <Skeleton className={styles.date} width={150} height={16} />
                    </div>
                    <Skeleton className={styles.title} width={250} height={24} />
                    <Skeleton className={styles.img} width={'100%'} height={200} />
                    <div className={styles.footer}>
                        <Skeleton width={200} height={36} />
                    </div>
                </Card>
            </div>
        )
    }
    return (
        <div className={classNames(styles.item, className, styles[view])}>
            <Card className={styles.card}>
                <div className={styles.imgWrapper}>
                    <Skeleton className={styles.img} width={200} height={200} />
                </div>
                <div className={styles.infoWrapper}>
                    <Skeleton className={styles.types} width={130} height={16} />
                </div>
                <Skeleton className={styles.title} width={150} height={16} />
            </Card>
        </div>
    )
})
