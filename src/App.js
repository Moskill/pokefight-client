import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardDeck from './components/card-box/CardDeck';
import Library from './components/cardLibrary/Library';
import Canvas from './components/game-board/Canvas';
export const gameContext = React.createContext({cardsAI: null, cardsPlayer: null});

function App() {

  const getRandNo = () => {
    let randNo = Math.floor(Math.random() * 809);
    return randNo;
  }
  
  const [pokemonList, setPokemonList] = useState();
  const [cards, setCards] = useState({cardsAI:getRandNo(), cardsPlayer: getRandNo()});
  const [hasTurn, setHasTurn] = useState('AI'); // Wer am Zug ist
  const [openLibrary, setOpenLibrary] = useState(false);
  const [searchField, setSearchField] = useState({display: 'none'});
  const [results, setResults] = useState([]);
  const [userInput, setUserInput] = useState("");
  
  console.log(results, 'RESULTS???');

  // Die Suchfunktion
  const searchHandler = (e) => {
    e.preventDefault();
    let myResults = [];
    const items = pokemonList.filter((item) => item.name.english.includes(userInput)).map((i) => {
        myResults.push(i);
      });
    setResults(myResults);
    // setPokemonList(myResults)
  };

  // // Der Game-Loop
  // if(hasTurn === 'AI') {
  //   console.log('AI ist am Zug!')
  // } else { 
  //   console.log('Player ist am Zug!') 
  // }


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
    searchField.display === 'none' ?  setSearchField({display: 'block'}) : setSearchField({display: 'none'})
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
      <form onSubmit={searchHandler}>
        <input className="search-field" style={{display: searchField.display}} type="search" placeholder="Search Pokemon" onChange={(e) => setUserInput(e.target.value)} />
        <input type="submit" value="Search" />
      </form>
      {openLibrary && (
        <Library pokemonList={pokemonList} searchResults={results} />
      )}
      <Canvas />
    </>
  );
}

export default App;
