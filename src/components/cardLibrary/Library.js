import React, { useContext, useState } from 'react';
import { PokemonListContext } from '../../App';
import { CardsContext } from '../../App';
import './Library.css';
import SingleCard from '../cards/SingleCard';


function Library({searchResults, updateCards}) {

  const [page, setPage] = useState({pageFrom: 0, pageTo: 30});

  let pokemonList = useContext(PokemonListContext);
    if(searchResults.length !== 809 && searchResults.length !== 0){
      pokemonList = searchResults;
    }

  return (
    <>
      <div className="library-wrapper">
        <div className="card-list">
          {pokemonList && (
            pokemonList.slice(page.pageFrom, page.pageTo).map(card => {
              return (
                <div className="single-card" onClick={() => updateCards(card.id -1 )}>
                  <SingleCard key={card.id -1} cardNo={card.id -1} />
                </div>
              )
            })
          )}
        </div>  
      </div>
      <div className="pagination">
        <button onClick={() => setPage({pageFrom: page.pageFrom - 30, pageTo: page.pageTo - 30})}> ◀️ </button>
        <button onClick={() => setPage({pageFrom: page.pageFrom + 30, pageTo: page.pageTo + 30})}> ▶️ </button>
      </div>
    </>
  )
}

export default Library
