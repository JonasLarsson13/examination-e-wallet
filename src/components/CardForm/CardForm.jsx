import React from 'react';
import Input from 'components/Input/Input';

import './CardForm.scss';

const CardForm = ({ card, setCard }) => {
  return (
    <aside className="app__cardform">
      <Input 
        text="CARD NUMBER"
        type="text"
        value={card.cardNumber}
        onChange={(e) => setCard({ ...card, cardNumber: e.target.value })}
      />
      <Input 
        text="CARDHOLDER NAME"
        type="text"
        value={card.cardHolder}
        onChange={(e) => setCard({ ...card, cardHolder: e.target.value })}
      />
      <span className="app__cardform-smallinputs">
        <Input 
          text="VALID THRU"
          type="month"
          value={card.cardDate}
          onChange={(e) => setCard({ ...card, cardDate: e.target.value })}
        />
        <Input 
          text="CCV"
          type="text"
          value={card.cardCcv}
          onChange={(e) => setCard({ ...card, cardCcv: e.target.value })}
        />
      </span>
      <span className="app__cardform-select">
        <label>VENDOR</label>
        <select
          value={card.vendor}
          onChange={(e) => setCard({ ...card, vendor: e.target.value })}
        >
          <option></option>
          <option>BITCOIN INC</option>
          <option>NINJA BANK</option>
          <option>BLOCK CHAIN INC</option>
          <option>EVIL CORP</option>
        </select>
      </span>
    </aside>
  );
};

export default CardForm;