import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SingleCard from './components/cards/SingleCard';
import CardDeck from './components/card-box/CardDeck';

function App() {

  const getRandNo = () => {
    let randNo = Math.floor(Math.random() * 809);
    return randNo;
  }
  
  const [pokemonList, setPokemonList] = useState();
  const [cards, setCards] = useState({cardsAI:getRandNo(), cardsPlayer: getRandNo()});

  // ALle Pokemons fetchen 
  useEffect(() => {
    axios.get('http://localhost:8000/pokemon')
    .then(response => {
      setPokemonList(response.data);
    }, error => {
      console.log(error);
    });
  }, [])


    
  return (
    <div className="app">
      <div className="table">
        <CardDeck allCards={pokemonList} cardNo={cards}/>
      </div>
    </div>
  );
}

export default App;
