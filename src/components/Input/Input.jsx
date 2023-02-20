import React from 'react';

import './Input.scss';

const Input = ({ name, text, type, value, onChange }) => {
    return (
        <span className="app__input">
            <label htmlFor={name}>{text}</label>
            <input 
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
        </span>
    );
};

export default Input;