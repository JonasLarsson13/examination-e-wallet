import React from 'react';

import './Top.scss';

const Top = ({ title, subTitle }) => {
  return (
    <header className="app__top">
        <h1>
            {title}
        </h1>
        <p>
            {subTitle}
        </p>
    </header>
  );
};

export default Top;