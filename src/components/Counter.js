import React, { useState } from 'react';
import './Counter.css';

const Counter = ({initialCount}) => {

    const [itung,setItung] = useState(initialCount);

    const increment = () => {
        setItung(itung + 1);
    }

    const decrement = () => {
        setItung(itung - 1);
    }

    return (
        <div className="counter">
            <p>Count: {itung}</p>
            <div>
                <button onClick={decrement}>Decrement</button>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );
};

export default Counter;