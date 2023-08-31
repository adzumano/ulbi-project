import classNames from 'classnames'
import { type FC, type MouseEvent, useCallback, useEffect, useRef, useState } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'

import styles from './Modal.module.scss'

interface ModalProps {
    className?: string
    isOpen?: boolean
    onClose?: () => void
}

interface KeyboardEvent {
    key: string
}

type TimerRef = ReturnType<typeof setTimeout>

const ANIMATION_DELAY = 300
export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen = false, onClose } = props
    const timerRef = useRef<TimerRef>()
    const [isClosing, setIsClosing] = useState<boolean>(false)

    const onOverlayClick = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation()
    }

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onOverlayClick()
            }
        },
        [onOverlayClick],
    )

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current as TimerRef)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    if (!isOpen) {
        return null
    }
    return (
        <Portal>
            <div
                className={classNames(styles.modal, className, {
                    [styles.opened]: isOpen,
                    [styles.closed]: isClosing,
                })}
            >
                <div className={styles.overlay} onClick={onOverlayClick}>
                    <div className={styles.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
