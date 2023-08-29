import classNames from "classnames";
import styles from "./Button.module.scss";
import {ButtonHTMLAttributes, FC} from "react";

type ButtonVariant = 'clear' | 'primary';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string
    variant?: ButtonVariant
}
export const Button: FC<ButtonProps> = (props) => {
    const {variant='primary', className, children, ...otherProps} = props;
    return (
        <button className={classNames(styles.button, className, styles[variant])} {...otherProps}>
            {children}
        </button>
    );
};

