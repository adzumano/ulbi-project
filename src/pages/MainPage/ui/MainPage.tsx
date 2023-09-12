import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page'

export default function MainPage() {
    const { t } = useTranslation()
    return <Page>{t('main')}</Page>
}
