import classNames from "classnames";
import styles from "./Button.module.scss";
import {ButtonHTMLAttributes, FC} from "react";

export enum ButtonTheme {
    CLEAR='clear',
    PRIMARY='primary'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string
    theme?: ButtonTheme
}
export const Button: FC<ButtonProps> = (props) => {
    const {theme=ButtonTheme.PRIMARY, className, children, ...otherProps} = props;
    return (
        <button className={classNames(styles.button, className, styles[theme])} {...otherProps}>
            {children}
        </button>
    );
};

