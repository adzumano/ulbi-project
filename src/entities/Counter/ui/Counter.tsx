import { counterActions } from 'entities/Counter/model/slice/counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }
    return (
        <div>
            <Button onClick={increment} data-testid="increment-btn">
                +
            </Button>
            <Button onClick={decrement} data-testid="decrement-btn">
                -
            </Button>
            <h1 data-testid="value-title">{counterValue}</h1>
        </div>
    )
}
