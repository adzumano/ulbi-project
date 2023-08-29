import classNames from "classnames";
import styles from "./Sidebar.module.scss";
import {FC, useState} from "react";
import {ThemeSwitcher} from "features/ThemeSwitcher";

interface SidebarProps {
    className?:string
}
export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onToggle = () => setCollapsed((collapsed) => !collapsed);
    return (
        <div className={classNames(styles.sidebar, className, {[styles.collapsed]: collapsed})}>
            <button onClick={onToggle}>Toggle</button>
            <div className={styles.switcher}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

