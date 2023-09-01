import classNames from 'classnames'
import { type FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'

import styles from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    const onOpen = useCallback(() => {
        setIsOpen(true)
    }, [])
    const onClose = useCallback(() => {
        setIsOpen(false)
    }, [])
    return (
        <nav className={classNames(styles.navbar, className)}>
            <Button variant={'clearInverted'} className={styles.links} size={'small'} onClick={onOpen}>
                {t('logIn')}
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                {t('logIn')}
            </Modal>
        </nav>
    )
}
