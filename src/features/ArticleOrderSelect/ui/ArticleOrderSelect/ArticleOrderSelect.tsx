import classNames from 'classnames'
import { type FC, memo } from 'react'
import { type Order } from 'shared/types/order'
import { Label } from 'shared/ui/Label/Label'
import { Select, type SelectOptions } from 'shared/ui/Select/Select'

import styles from './ArticleOrderSelect.module.scss'

interface ArticleOrderSelectProps {
    className?: string
    order: Order
    onChangeOrder: (order: Order) => void
}

const orderOptions: Array<SelectOptions<Order>> = [
    {
        value: 'asc',
        content: 'Возрастание',
    },
    {
        value: 'desc',
        content: 'Убывание',
    },
]
export const ArticleOrderSelect: FC<ArticleOrderSelectProps> = memo((props) => {
    const { className, order, onChangeOrder } = props
    return (
        <div className={classNames(className, styles.selectWrapper)}>
            <Label className={styles.label}>Сортировать ПО:</Label>
            <Select
                id={'order'}
                name={'order'}
                value={order}
                options={orderOptions}
                onChange={onChangeOrder}
            />
        </div>
    )
})
