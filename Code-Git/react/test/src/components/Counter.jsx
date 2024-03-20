import React, { useState } from 'react';

const Counter = () => {
    const [n, setN] = useState(0);


    function plus() {
        setN(n + 1);
    }
    return (
        <div>
            <h1>{n}</h1>
            <button onClick={plus}>+</button>
            <button>reset</button>
            <button>-</button>
        </div>
    );
};

export default Counter;