import classNames from 'classnames'
import { type FC, memo } from 'react'
import { Text } from 'shared/ui/Text/Text'

import { type ArticleTextBlock } from '../../model/types/article'
import styles from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = memo(({ className, block }) => {
    const { title, paragraphs } = block
    return (
        <div className={classNames(styles.block, className)}>
            {title ? <Text className={styles.title} title={title} /> : null}
            {paragraphs.map((paragraph, idx) => (
                <Text className={styles.paragraph} key={idx} text={paragraph} />
            ))}
        </div>
    )
})
