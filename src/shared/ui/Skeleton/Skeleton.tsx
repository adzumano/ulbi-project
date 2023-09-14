import classNames from 'classnames'
import type { CSSProperties, FC } from 'react'

import styles from './Skeleton.module.scss'

interface SkeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    borderRadius?: string
}

export const Skeleton: FC<SkeletonProps> = (props) => {
    const { className, width, height, borderRadius } = props

    const style: CSSProperties = {
        width,
        height,
        borderRadius,
    }
    return <div className={classNames(styles.skeleton, className)} style={style} />
}
