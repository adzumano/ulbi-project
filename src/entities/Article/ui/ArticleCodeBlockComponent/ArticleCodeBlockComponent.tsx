import classNames from 'classnames'
import { type FC, memo } from 'react'
import { Code } from 'shared/ui/Code/Code'

import { type ArticleCodeBlock } from '../../model/types/article'
import styles from './ArticleCodeBlockComponent.module.scss'

interface ArticleCodeBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = memo(({ className, block }) => {
    const { code } = block
    return (
        <div className={classNames(styles.block, className)}>
            <Code text={code} />
        </div>
    )
})
