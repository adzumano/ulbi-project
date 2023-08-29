import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import styles from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}
export default function NotFoundPage({ className }: NotFoundPageProps) {
    const { t } = useTranslation('notFound')
    return <div className={classNames(styles.notFound, className)}>{t('notFound')}</div>
}
