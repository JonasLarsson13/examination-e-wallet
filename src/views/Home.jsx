import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Top from 'components/Top/Top';
import Card from 'components/Card/Card';
import Button from 'components/Button/Button';
import CardStack from 'components/CardStack/CardStack';

const Home = ({ cards, removeCard }) => {
  const navigate = useNavigate();
  const [displayCards, setDisplayCards] = useState([]);
  const [activeCard, setActiveCard] = useState({});

  const handleNavigate = () => {
    navigate("/addcard");
  };

  useEffect(() => {
    if (cards[0]) {
      setActiveCard(cards[0]);
      setDisplayCards(cards.slice(1));
    }
  }, [cards]);

  const handleCardClick = (card) => {
    setActiveCard(card);
    setDisplayCards(cards.filter((c) => c.cardNumber !== card.cardNumber));
  }

  return (
    <>
      <Top title="E-WALLET" subTitle={cards[0] ? 'ACTIVE CARD' : ''} />
      {cards[0] ? <Card info={activeCard} removeCard={removeCard} /> : ''}
      {cards[1] ? <CardStack cards={displayCards} handleCardClick={handleCardClick} /> : ''}
      <Button text={cards[0] ? 'ADD A NEW CARD' : 'ADD YOUR FIRST CARD'} onClick={ handleNavigate } />
    </>
  );
};

export default Home;