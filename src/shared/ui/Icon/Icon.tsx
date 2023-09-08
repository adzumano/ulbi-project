import classNames from 'classnames'
import { type FC, type SVGProps } from 'react'

import styles from './Icon.module.scss'

interface IconProps {
    className?: string
    Svg: FC<SVGProps<SVGSVGElement>>
}

export const Icon: FC<IconProps> = (props) => {
    const { className, Svg } = props
    return <Svg className={classNames(styles.icon, className)} />
}
