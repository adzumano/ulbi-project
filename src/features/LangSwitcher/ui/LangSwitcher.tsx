import classNames from 'classnames'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string
}
export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation()

    const onToggle = async () => await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    return (
        <Button className={classNames(className)} variant={'clear'} onClick={onToggle}>
            {t('lang')}
        </Button>
    )
}
