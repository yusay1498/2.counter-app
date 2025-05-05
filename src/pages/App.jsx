import React, { useState } from 'react';
import CounterList from '../components/CounterList';
import CounterInput from '../components/CounterInput';

function App() {
    const [counters, setCounters] = useState([]);

    const addCounter = (name) => {
        setCounters([...counters, { name, value: 0 }]);
    };

    const updateCounter = (index, delta) => {
        const newCounters = counters.map((counter, i) => (
            i === index ? { ...counter, value: counter.value + delta } : counter
        ));
        setCounters(newCounters);
    };

    return (
        <div>
            <h1>Counter App</h1>
            <CounterInput onAdd={addCounter} />
            <CounterList counters={counters} onCounterUpdate={updateCounter} />
        </div>
    );
}

export default App;