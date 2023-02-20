import React from 'react';
import Card from 'components/Card/Card';

import './CardStack.scss';

const CardStack = ({ cards, handleCardClick }) => {
  return (
    <section 
      className="app__cardstack"
      style={{marginBottom: cards.length > 0 ? `calc(220px + ${cards.length * 1.6}rem)` : '230px'}}
    >
      {cards.map((card, index) => (
        <Card key={index} handleCardClick={handleCardClick} info={card} cardStackNumber={index + 1} displayCard={true} />
      ))}
    </section>
  );
};

export default CardStack;