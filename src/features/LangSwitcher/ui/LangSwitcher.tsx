import classNames from 'classnames'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}
export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className, short = false } = props
    const { t, i18n } = useTranslation()

    const onToggle = async () => await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    return (
        <Button
            className={classNames(className)}
            variant={'backgroundInverted'}
            onClick={onToggle}
            size={'small'}
        >
            {t(short ? 'shortLang' : 'lang')}
        </Button>
    )
}
