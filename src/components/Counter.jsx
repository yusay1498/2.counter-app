import React from 'react';

function Counter({ counter, onIncrement, onDecrement }) {
    return (
        <div>
            <h2>{counter.name}</h2>
            <button onClick={onDecrement}>-</button>
            <span>{counter.value}</span>
            <button onClick={onIncrement}>+</button>
        </div>
    );
}

export default Counter;