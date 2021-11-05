import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardDeck from './components/card-box/CardDeck';
import Library from './components/cardLibrary/Library';
import Canvas from './components/game-board/Canvas';

function App() {

  const getRandNo = () => {
    let randNo = Math.floor(Math.random() * 809);
    return randNo;
  }
  
  const [pokemonList, setPokemonList] = useState();
  const [cards, setCards] = useState({cardsAI:getRandNo(), cardsPlayer: getRandNo()});
  const [hasTurn, setHasTurn] = useState('AI'); // Wer am Zug ist
  const [openLibrary, setOpenLibrary] = useState(false);

  // ALle Pokemons fetchen 
  useEffect(() => {
    axios.get('http://localhost:8000/pokemon')
    .then(response => {
      setPokemonList(response.data);
    }, error => {
      console.log(error);
    });
  }, []);

  const openLibraryHandler = () => {
    console.log(openLibrary, 'vor dem set');
    openLibrary ? setOpenLibrary(false) : setOpenLibrary(true);
  }
  
  return (
    <>
    <div className="app">
      <div className="table">
        <CardDeck allCards={pokemonList} cardNo={cards}/>
      </div>
    </div>
      <button className="library-btn" onClick={openLibraryHandler}>Open Card library</button>
      {openLibrary && (
        <Library pokemonList={pokemonList}/>
      )}
      <Canvas />
    </>
  );
}

export default App;
