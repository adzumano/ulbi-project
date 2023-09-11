import classNames from 'classnames'
import { type FC, memo } from 'react'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Text } from 'shared/ui/Text/Text'

import { Comment } from '../../model/types/comment'
import styles from './CommentCard.module.scss'

interface CommentCardProps {
    className?: string
    comment: Comment
    isLoading?: boolean
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
    const { className, comment, isLoading = false } = props

    if (isLoading) {
        return (
            <div className={classNames(styles.card, className)}>
                <div className={styles.header}>
                    <Skeleton width={30} height={30} borderRadius={'50%'} />
                    <Skeleton className={styles.username} width={100} height={16} />
                </div>
                <Skeleton className={styles.text} width={'100%'} height={50} />
            </div>
        )
    }
    return (
        <div className={classNames(styles.card, className)}>
            <div className={styles.header}>
                {comment?.user.avatar ? (
                    <Avatar
                        src={comment.user.avatar}
                        alt={comment.user.username}
                        size={30}
                        objectFit={'cover'}
                    />
                ) : null}
                <Text className={styles.username} title={comment.user.username} />
            </div>
            <Text className={styles.text} text={comment.text} />
        </div>
    )
})
