import classNames from 'classnames'
import { type ReactNode, useCallback } from 'react'
import { Card } from 'shared/ui/Card/Card'

import { typedMemo } from '../../lib/helpers/typedMemo/typedMemo'
import styles from './Tabs.module.scss'

export interface TabItem<T extends string> {
    value: T
    content: ReactNode
}
interface TabsProps<T extends string> {
    className?: string
    tabs: Array<TabItem<T>>
    value: string
    onChange: (tab: TabItem<T>) => void
}

export const TabsComponent = <T extends string>(props: TabsProps<T>) => {
    const { className, tabs, value, onChange } = props

    const onChangeHandler = useCallback(
        (tab: TabItem<T>) => {
            return () => {
                onChange(tab)
            }
        },
        [onChange],
    )
    return (
        <div className={classNames(styles.tabs, className)}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    className={styles.tab}
                    variant={tab.value === value ? 'outlined' : 'normal'}
                    onClick={onChangeHandler(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    )
}

export const Tabs = typedMemo(TabsComponent)
