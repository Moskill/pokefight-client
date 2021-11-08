import React from 'react';
import './Library.css';
import SingleCard from '../cards/SingleCard';


function Library({pokemonList, searchResults}) {

  // console.log(searchResults[0].name.english)

  // if(searchResults != []){
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
            pokemonList.slice(0, 30).map(card => {
              // console.log(card.id)
              return (
                <div className="single-card">
                  <SingleCard key={card.id -1} allCards={pokemonList} cardNo={card.id -1} />
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
