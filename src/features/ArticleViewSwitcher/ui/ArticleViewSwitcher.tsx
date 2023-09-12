import classNames from 'classnames'
import { type ArticleView } from 'entities/Article'
import { type FC, type SVGProps, type VFC, memo, useCallback } from 'react'
import BlockIcon from 'shared/assets/icons/block.svg'
import GridIcon from 'shared/assets/icons/grid.svg'
import { Button } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'

import styles from './ArticleViewSwitcher.module.scss'

interface ArticleViewSwitcherProps {
    className?: string
    view: ArticleView
    onViewClick?: (view: ArticleView) => void
}

interface ArticleViewType {
    view: ArticleView
    icon: VFC<SVGProps<SVGSVGElement>>
}

const viewTypes: ArticleViewType[] = [
    { view: 'block', icon: BlockIcon },
    { view: 'grid', icon: GridIcon },
]
export const ArticleViewSwitcher: FC<ArticleViewSwitcherProps> = memo((props) => {
    const { className, view, onViewClick } = props
    const onViewClickHandler = (newView: ArticleView) => () => {
        onViewClick?.(newView)
    }
    return (
        <div className={classNames(styles.ArticleViewSwitcher, className)}>
            {viewTypes.map((viewType) => (
                <Button key={viewType.view} variant={'clear'} onClick={onViewClickHandler(viewType.view)}>
                    <Icon
                        className={classNames({ [styles.selected]: view === viewType.view })}
                        Svg={viewType.icon}
                    />
                </Button>
            ))}
        </div>
    )
})
