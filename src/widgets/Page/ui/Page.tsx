import classNames from 'classnames'
import { type FC, type MutableRefObject, type ReactNode, useRef } from 'react'
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll'

import styles from './Page.module.scss'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page: FC<PageProps> = (props) => {
    const { className, children, onScrollEnd } = props
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    })
    return (
        <section ref={wrapperRef} className={classNames(styles.page, className)}>
            {children}
            <div ref={triggerRef} />
        </section>
    )
}
