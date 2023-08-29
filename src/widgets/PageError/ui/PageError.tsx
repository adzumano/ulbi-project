import classNames from 'classnames'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

import styles from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}
export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation('pageError')

    const onReload = () => {
        location.reload()
    }
    return (
        <div className={classNames(styles.pageError, className)}>
            <p>{t('pageError')}</p>
            <Button onClick={onReload}>{t('reloadPage')}</Button>
        </div>
    )
}
