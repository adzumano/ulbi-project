import classNames from 'classnames'
import { type FC, Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { Modal } from 'shared/ui/Modal/Modal'

import { LoginFormLazy } from '../../ui/LoginForm/LoginForm.lazy'
import styles from './LoginModal.module.scss'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}
export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose } = props
    return (
        <Modal className={classNames(styles.loginModal, className)} isOpen={isOpen} onClose={onClose}>
            <Suspense fallback={<Loader />}>
                <LoginFormLazy onSuccess={onClose} />
            </Suspense>
        </Modal>
    )
}
