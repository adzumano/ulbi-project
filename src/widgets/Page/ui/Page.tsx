import { type StateSchema } from 'app/providers/StoreProvider'
import classNames from 'classnames'
import { type FC, type MutableRefObject, type ReactNode, type UIEvent, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll'
import { useInitialEffect } from 'shared/hooks/useInitialEffect'
import { useThrottle } from 'shared/hooks/useThrottle'

import { getScrollRestorationByPath } from '../model/selectors/scrollRestorationSelectors'
import { scrollRestorationActions } from '../model/slice/scrollRestorationSlice'
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
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useSelector((state: StateSchema) => getScrollRestorationByPath(state, pathname))

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollRestorationActions.setScrollPosition({
                path: pathname,
                position: e.currentTarget.scrollTop,
            }),
        )
    }, 500)

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    }, [])
    return (
        <section ref={wrapperRef} className={classNames(styles.page, className)} onScroll={onScroll}>
            {children}
            {onScrollEnd ? <div className={styles.trigger} ref={triggerRef} /> : null}
        </section>
    )
}
