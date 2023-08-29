import classNames from "classnames";
import {FC} from "react";
import styles from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}
export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <nav className={classNames(styles.navbar, className)}>
            <div className={styles.links}>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>About</AppLink>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>Main</AppLink>
            </div>
        </nav>
    );
};

