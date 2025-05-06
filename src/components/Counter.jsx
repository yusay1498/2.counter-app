import React from 'react';

function Counter({ counter, onIncrement, onDecrement }) {
    return (
        <div className="counter-container">
            <h2 className="counter-name">{counter.name}</h2>
            <button className="counter-button decrement" onClick={onDecrement}>-</button>
            <span className="counter-value">{counter.value}</span>
            <button className="counter-button increment" onClick={onIncrement}>+</button>
        </div>
    );
}

export default Counter;