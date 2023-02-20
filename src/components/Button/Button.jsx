import React from 'react';

import './Button.scss';

const Button = ({ text, onClick, filled }) => {
  return (
    <button
        className={`app__buttom ${filled ? 'filled' : null}`}
        onClick={onClick}
    >
        {text}
    </button>
  );
};

export default Button;