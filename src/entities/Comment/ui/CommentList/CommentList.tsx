import classNames from 'classnames'
import { type FC, memo } from 'react'
import { Text } from 'shared/ui/Text/Text'

import { type Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import styles from './CommentList.module.scss'

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = memo((props) => {
    const { className, isLoading, comments = [] } = props
    return (
        <div className={classNames(styles.list, className)}>
            {comments.length > 0 ? (
                comments.map((comment) => {
                    return (
                        <CommentCard
                            className={styles.card}
                            key={comment?.id}
                            comment={comment}
                            isLoading={isLoading}
                        />
                    )
                })
            ) : (
                <Text text={'Комментарии отсутствует'} />
            )}
        </div>
    )
})
