import React, { useContext } from 'react';
import { PokemonListContext } from '../../App';
import { CardsContext } from '../../App';
import './Library.css';
import SingleCard from '../cards/SingleCard';


function Library({searchResults}) {

  const pokemonList = useContext(PokemonListContext);
  const {cards, setCards} = useContext(CardsContext);

  console.log(CardsContext)
  // cardNo.cardsPlayer = 777;


  // console.log(searchResults[0].name.english)

  // if(searchResults !== []){
  //   const filteredPokemons = pokemonList.filter(item => {
  //     return searchResults.name.english === item.name.english
  //   })
  //   console.log(filteredPokemons)
  // }
  

  return (
    <>
      <div className="library-wrapper">
        <div className="card-list">
          {pokemonList && (
            
            pokemonList.slice(20, 60).map(card => {
              // console.log(card)
              return (
                <div className="single-card">
                  <SingleCard key={card.id -1} cardNo={card.id -1} onClick={() => setCards({cardsPlayer: card.id})} />
                </div>
              )
            })
          )}
        </div>  
      </div>
    </>
  )
}

export default Library
