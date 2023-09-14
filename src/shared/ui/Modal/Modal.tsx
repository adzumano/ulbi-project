import classNames from 'classnames'
import {
    type FC,
    type MouseEvent,
    type MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'
import { useTheme } from 'shared/config/theme'
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

const ANIMATION_DELAY = 300
export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen = false, onClose } = props
    const { theme } = useTheme()
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>
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
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    if (!isOpen) {
        return null
    }
    return (
        <Portal>
            <div
                className={classNames(styles.modal, className, theme, {
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
