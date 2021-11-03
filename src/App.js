import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SingleCard from './components/cards/SingleCard';

function App() {

  const [pokemonList, setPokemonList] = useState();

  // ALle Pokemons fetchen 
  useEffect(() => {
    axios.get('http://localhost:8000/pokemon')
    .then(response => {
      setPokemonList(response.data);
    }, error => {
      console.log(error);
    });
  }, [])

  const getRandNo = () => {
    let randNo = Math.floor(Math.random() * 809);
    return randNo;
  }
    
  return (
    <div className="app">
      <div className="table">
        <SingleCard cardNo={getRandNo()} props={pokemonList}/>
      </div>
    </div>
  );
}

export default App;
