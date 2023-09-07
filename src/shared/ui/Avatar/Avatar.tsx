import classNames from 'classnames'
import { type CSSProperties, type FC, type ImgHTMLAttributes, memo, useMemo } from 'react'

import styles from './Avatar.module.scss'

type ObjectFit = 'contain' | 'cover' | 'fill'

interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'size'> {
    className?: string
    alt: string
    size?: number
    objectFit?: ObjectFit
}
export const Avatar: FC<AvatarProps> = memo((props) => {
    const { className, size = 100, alt, objectFit = 'fill', ...otherProps } = props
    const styleSize = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    )
    return (
        <img
            className={classNames(styles.avatar, className, styles[objectFit])}
            style={styleSize}
            alt={alt}
            {...otherProps}
        />
    )
})
