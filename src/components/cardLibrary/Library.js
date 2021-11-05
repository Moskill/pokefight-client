import React from 'react';
import './Library.css';
import SingleCard from '../cards/SingleCard';


function Library({pokemonList}) {

  console.log(pokemonList)

  return (
    <>
      <div className="library-wrapper">
        <div className="card-list">
          {pokemonList && (
            pokemonList.slice(0, 30).map(card => {
              console.log(card.id)
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
