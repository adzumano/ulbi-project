import classNames from 'classnames'
import { type FC } from 'react'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Theme, useTheme } from 'shared/config/theme'
import { Button } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()
    return (
        <Button className={classNames(className)} variant={'clear'} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    )
}
