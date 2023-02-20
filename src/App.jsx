import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import AddCard from 'views/AddCard';
import Home from 'views/Home';
import './App.css';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);

  const addCard = (card) => {
    setCards([...cards, card]);
    localStorage.setItem('cards', JSON.stringify([...cards, card]));
    navigate('/');
  };

  const removeCard = (card) => {
    const newCards = cards.filter((c) => c.cardNumber !== card.cardNumber);
    setCards(newCards);
    localStorage.setItem('cards', JSON.stringify(newCards));
  }

  useEffect(() => {
    if (localStorage.getItem('cards')) {
      setCards(JSON.parse(localStorage.getItem('cards')));
    }
  }, []);

  return (
    <div className="app">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home cards={cards} removeCard={removeCard} />} />
        <Route path="/addcard" element={<AddCard addCard={addCard} />} />
      </Routes>
    </div>
  );
};

export default App;
