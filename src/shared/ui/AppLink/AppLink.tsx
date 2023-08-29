import classNames from "classnames";
import styles from "./AppLink.module.scss";
import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY='primary',
    SECONDARY='secondary'
}
interface AppLinkProps extends LinkProps{
    className?:string
    theme?: AppLinkTheme
}
export const AppLink: FC<AppLinkProps> = (props) => {
    const { theme=AppLinkTheme.PRIMARY, className, children, ...otherProps} = props;
    return (
        <Link className={classNames(styles.AppLink, className, styles[theme])} {...otherProps}>
            {children}
        </Link>
    );
};

