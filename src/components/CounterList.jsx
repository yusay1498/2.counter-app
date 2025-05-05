import React from 'react';
import Counter from './Counter';

function CounterList({ counters, onCounterUpdate }) {
    return (
        <div>
            {counters.map((counter, index) => (
                <Counter
                    key={index}
                    counter={counter}
                    onIncrement={() => onCounterUpdate(index, 1)}
                    onDecrement={() => onCounterUpdate(index, -1)}
                />
            ))}
        </div>
    );
}

export default CounterList;