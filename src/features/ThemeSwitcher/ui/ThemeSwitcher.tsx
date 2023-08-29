import classNames from "classnames";
import styles from "./ThemeSwitcher.module.scss";
import {FC} from "react";
import {Theme, useTheme} from "shared/config/theme";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?:string
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button className={classNames(styles.themeSwitcher, className)} variant={'clear'} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
        </Button>
    );
};

