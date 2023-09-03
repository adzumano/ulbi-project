import classNames from 'classnames'
import { getAuthData, userActions } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { type FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'

import styles from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const authData = useSelector(getAuthData)
    const dispatch = useDispatch()

    const onOpen = useCallback(() => {
        setIsOpen(true)
    }, [])
    const onClose = useCallback(() => {
        setIsOpen(false)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <nav className={classNames(styles.navbar, className)}>
                <Button variant={'clearInverted'} className={styles.links} size={'small'} onClick={onLogout}>
                    {t('logOut')}
                </Button>
                <LoginModal isOpen={isOpen} onClose={onClose} />
            </nav>
        )
    }
    return (
        <nav className={classNames(styles.navbar, className)}>
            <Button variant={'clearInverted'} className={styles.links} size={'small'} onClick={onOpen}>
                {t('logIn')}
            </Button>
            <LoginModal isOpen={isOpen} onClose={onClose} />
        </nav>
    )
}
