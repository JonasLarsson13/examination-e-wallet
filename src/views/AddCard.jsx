import React, { useState } from 'react';
import Top from 'components/Top/Top';
import Button from 'components/Button/Button';
import Card from 'components/Card/Card';
import CardForm from 'components/CardForm/CardForm';

const AddCard = ({ addCard }) => {
  const [card, setCard] = useState({
    cardNumber: '',
    cardHolder: '',
    cardDate: '',
    cardCcv: '',
    vendor: ''
  });
  return (
    <>
      <Top title="ADD A NEW BANK CARD" subTitle="NEW CARD" />
      <Card info={card} displayCard={true} />
      <CardForm card={card} setCard={setCard} />
      <Button text="ADD CARD" filled={true} onClick={() => addCard(card)} />
    </>
  );
};

export default AddCard;