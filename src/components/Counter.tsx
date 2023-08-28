import React, {useState} from 'react';
import styles from './Counter.module.scss'
const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => setCount((count) => count + 1 )
    const decrement = () => setCount((count) => count - 1 )
    return (
        <div className={styles.counter}>
            {count}
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Remove</button>
            </div>
    );
};

export default Counter;