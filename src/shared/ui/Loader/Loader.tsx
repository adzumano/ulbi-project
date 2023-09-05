import classNames from 'classnames'
import { type FC, memo } from 'react'

import styles from './Loader.module.scss'

interface LoaderProps {
    className?: string
}
export const Loader: FC<LoaderProps> = memo(({ className }) => {
    return <div className={classNames(styles.loader, className)} />
})
