import classNames from 'classnames'
import { type FC, memo } from 'react'
import { Text } from 'shared/ui/Text/Text'

import { type ArticleImageBlock } from '../../model/types/article'
import styles from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo(
    ({ className, block }) => {
        const { title, src } = block
        return (
            <div className={classNames(styles.block, className)}>
                <img className={styles.img} src={src} alt={title} />
                {title ? <Text className={styles.title} text={title} align={'center'} /> : null}
            </div>
        )
    },
)
