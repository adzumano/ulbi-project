import classNames from 'classnames'
import { type FC } from 'react'

import styles from './Loader.module.scss'

interface LoaderProps {
    className?: string
}
export const Loader: FC<LoaderProps> = ({ className }) => {
    return <div className={classNames(styles.loader, className)} />
}
