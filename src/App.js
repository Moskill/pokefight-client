import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import './App.css';
import CardDeck from './components/card-box/CardDeck';
import Library from './components/cardLibrary/Library';
import Canvas from './components/game-board/Canvas';

export const PokemonListContext = createContext({});
export const CardsContext = createContext({cardsAI: '', cardsPlayer: ''});

function App() {

  const getRandNo = () => {
    let randNo = Math.floor(Math.random() * 809);
    return randNo;
  }
  
  const [pokemonList, setPokemonList] = useState();
  const [cards, setCards] = useState({cardsAI:getRandNo(), cardsPlayer: getRandNo()});
  const [hasTurn, setHasTurn] = useState('AI'); 
  const [openLibrary, setOpenLibrary] = useState(false);
  const [searchField, setSearchField] = useState({display: 'none'});
  const [results, setResults] = useState([]);

  // Update für cards
  const updateCardsHandler = (card) => {
    setCards({...cards, cardsPlayer: card})
  }
  
  // Die Suchfunktion
  const searchHandler = (arg) => {
    const itemsArr = pokemonList.filter((item) => item.name.english.toLowerCase().includes(arg.toLowerCase()))
    setResults(itemsArr);
  };

  // Der Game-Loop
  const startGame = () => {
    if(hasTurn === 'AI') {

    }
    console.log(pokemonList)
  }


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
    searchField.display === 'none' ?  setSearchField({display: 'block'}) : setSearchField({display: 'none'})
    openLibrary ? setOpenLibrary(false) : setOpenLibrary(true);
  }
  
  return (
    <>
      <PokemonListContext.Provider value={pokemonList} cards={cards}>
        <CardsContext.Provider value={cards}>
          <button onClick={startGame} className="start-btn">Start Game</button>
          <div className="app">
            <div className="table">
              <CardDeck />
            </div>
          </div>
          <button className="library-btn" onClick={openLibraryHandler}>Open Card library</button>
          <form>
            <input className="search-field" style={{display: searchField.display}} type="search" placeholder="Search Pokemon" onChange={(e) => searchHandler(e.target.value)} />
          </form>
          {openLibrary && (
            <Library searchResults={results} updateCards={updateCardsHandler} />
          )}
          <Canvas />
        </CardsContext.Provider>
      </PokemonListContext.Provider>
    </>
  );
}

export default App;
