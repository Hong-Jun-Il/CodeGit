import React from 'react';

const Input = ({create, inputChanges, input}) => {
    return (
        <div>
            <input type="text" onChange={inputChanges} name='username' value={input.username} />
            <input type="text" onChange={inputChanges} name='email' value={input.email} />
            <button onClick={create}>등록</button>
        </div>
    );
};

export default Input;