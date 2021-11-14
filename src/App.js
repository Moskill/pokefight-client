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
  const [rounds, setRounds] = useState(0); // Für die Rundenzahl
  const [points, setPoints] = useState({AI: 0, Player: 0}); // Für den Punktestand

  // Update für cards
  const updateCardsHandler = (card) => {
    setCards({...cards, cardsPlayer: card})
  }
  
  // Die Suchfunktion
  const searchHandler = (arg) => {
    const itemsArr = pokemonList.filter((item) => item.name.english.toLowerCase().includes(arg.toLowerCase()))
    setResults(itemsArr);
  };

  // Gewinner eines Zuges auswerten
  const getWinner = (cardAI, cardPlayer) => {
    const pointsAI = pokemonList[cardAI].base.Attack + pokemonList[cardAI].base.Defense + pokemonList[cardAI].base.HP;
    const pointsPlayer = pokemonList[cardPlayer].base.Attack + pokemonList[cardPlayer].base.Defense + pokemonList[cardPlayer].base.HP;
    console.log('Punkte AI: ', pointsAI, 'Punkte Player: ', pointsPlayer)
    pointsAI > pointsPlayer ?  setPoints({AI: points.AI + 1, Player: points.Player + 0}) : setPoints({AI: points.AI + 0, Player: points.Player + 1});
    setRounds(rounds + 1);
  }
  
  console.log('Punkte: ', points, 'Runden: ', rounds)
 
  // Einen zug ausführen
  const turnHandler = (hasTurn) => {
    getWinner(cards.cardsAI, cards.cardsPlayer)
    hasTurn === 'AI' ? setHasTurn('Player') : setHasTurn('AI');
    console.log('Player hat gezogen!');
  }

  // Der Game-Loop
  const startGame = () => {

    if(hasTurn === 'AI') {


      setHasTurn('Player')
    }
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
              <CardDeck hasTurn={hasTurn} makeTurn={turnHandler}/>
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
