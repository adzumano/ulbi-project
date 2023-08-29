import classNames from "classnames";
import {FC} from "react";
import styles from './Navbar.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}
export const Navbar: FC<NavbarProps> = ({className}) => {
    const {t} = useTranslation()
    return (
        <nav className={classNames(styles.navbar, className)}>
            <div className={styles.links}>
                <AppLink to={'/about'} variant={'secondary'}>{t('about')}</AppLink>
                <AppLink to={'/'} variant={'secondary'}>{t('main')}</AppLink>
            </div>
        </nav>
    );
};

