import React, { useState, useEffect } from 'react';

import chipLight from 'assets/chip-light.svg';
import chipDark from 'assets/chip-dark.svg';
import vendorBitcoin from 'assets/vendor-bitcoin.svg';
import vendorNinja from 'assets/vendor-ninja.svg';
import vendorBlock from 'assets/vendor-blockchain.svg';
import vendorEvil from 'assets/vendor-evil.svg';
import './Card.scss';

const Card = ({ info, cardStackNumber, removeCard, handleCardClick, displayCard }) => {
  const [cardNumberDisplay, setCardNumberDisplay] = useState('XXXX XXXX XXXX XXXX');
  const [hoverCard, setHoverCard] = useState(false);

  const displayDate = (date) => {
    const month = date.slice(5, 7);
    const year = date.slice(2, 4);
    return `${month}/${year}`;
  };

  useEffect(() => {
    if(info?.cardNumber?.length === 16) {
      let number = info.cardNumber;
      const first = number.slice(0, 4);
      const second = number.slice(4, 8);
      const third = number.slice(8, 12);
      const fourth = number.slice(12, 16);
      setCardNumberDisplay(`${first} ${second} ${third} ${fourth}`);
    } else {
      setCardNumberDisplay('XXXX XXXX XXXX XXXX');
    }
  }, [info?.cardNumber]);

  const checkVendor = (vendor) => {
    switch (vendor) {
      case 'BITCOIN INC':
        return ['var(--bitcoin-orange)', vendorBitcoin, chipDark, 'black'];
      case 'NINJA BANK':
        return ['var(--ninja-black)', vendorNinja, chipLight, 'white'];
      case 'BLOCK CHAIN INC':
        return ['var(--block_chain-purple)', vendorBlock, chipLight, 'white'];
      case 'EVIL CORP':
        return ['var(--evil_corp-red)', vendorEvil, chipLight, 'white'];
      default:
        return null;
    }
  }

  return (
    <figure 
      className="app__card"
      style={{
        backgroundColor:  info?.vendor ? checkVendor(info.vendor)[0] : null,
        color: info?.vendor ? checkVendor(info.vendor)[3] : 'black',
        zIndex: cardStackNumber ? cardStackNumber : 0,
        top: cardStackNumber ? `${cardStackNumber * 2}rem` : null,
      }}
      onMouseEnter={() => setHoverCard(true)}
      onMouseLeave={() => setHoverCard(false)}
      onClick={cardStackNumber ? () => handleCardClick(info) : null}
    >
      {!displayCard && <span
        className={`app__card-delete ${hoverCard ? 'active' : null}`}
        onClick={() => removeCard(info)}
      >REMOVE</span>}
      <span className="app__card-top">
        <img className="chip" src={info?.vendor ? checkVendor(info.vendor)[2] : chipDark} alt="chip" />
        <img 
          className="vendor" 
          src={
            info?.vendor ? checkVendor(info.vendor)[1] : vendorBitcoin
          } alt="vendor" />
      </span>
      <span className="app__card-number">
        <p>{cardNumberDisplay}</p>
      </span>
      <span className="app__card-middle">
        <p>
          CARDHOLDER NAME
        </p>
        <p>
          VALID THRU
        </p>
      </span>
      <span className="app__card-bottom">
        <p>
          {info?.cardHolder ? info.cardHolder.toUpperCase() : 'FIRSTNAME LASTNAME'}
        </p>
        <p>
          {info?.cardDate ? displayDate(info.cardDate) : 'MM/YY'}
        </p>
      </span>
    </figure>
  );
};

export default Card;