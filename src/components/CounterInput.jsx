import React, { useState } from 'react';

function CounterInput({ onAdd }) {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            onAdd(name);
            setName('');
        }
    };

    return (
        <form className="counter-input-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter counter name"
                className="counter-input"
            />
            <button type="submit" className="counter-input-button">Add Counter</button>
        </form>
    );
}

export default CounterInput;