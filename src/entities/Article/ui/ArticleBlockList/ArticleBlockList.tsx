import { type FC, memo, useCallback } from 'react'

import { type ArticleBlock } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import styles from './ArticleBlockList.module.scss'

interface BlockListProps {
    blocks?: ArticleBlock[]
}
export const ArticleBlockList: FC<BlockListProps> = memo((props) => {
    const { blocks = [] } = props

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case 'code':
                return <ArticleCodeBlockComponent key={block.id} className={styles.block} block={block} />
            case 'text':
                return <ArticleTextBlockComponent key={block.id} className={styles.block} block={block} />
            case 'image':
                return <ArticleImageBlockComponent key={block.id} className={styles.block} block={block} />
            default:
                return null
        }
    }, [])

    return <>{blocks.map(renderBlock)}</>
})
