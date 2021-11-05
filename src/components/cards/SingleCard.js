import React, { useState } from 'react';
import './SingleCard.css';

function SingleCard({allCards, cardNo}) {
  console.log(allCards)

  const cardImg = `https://img.pokemondb.net/artwork/large/${allCards && allCards[cardNo].name.english.toLowerCase()}.jpg`;
  
  const [pokemon, setPokemon] = useState({});
  

  // <button onClick={() => coverCard.display === 'none' ? setCoverCard({display: 'block'}) : setCoverCard({display: 'none'})}>O</button>

  return (
    <>
    {allCards && (
      <div className="main-wrappper">
        <div className="card-header">
          <div className="card-title">{allCards[cardNo].name.english}</div>
          <div className="card-hp"><span className="hp-style">HP </span>{allCards[cardNo].base.HP}</div>
        </div>
        <div className="card-image">
        <img src={cardImg} className="card-image-inner" height="100" alt="Pokemon-Card" />
        </div>
        <div className="card-attack">
          <ul className="card-base-list">
            <li>Attack - {allCards[cardNo].base.Attack}</li>
            <li>Defense - {allCards[cardNo].base.Defense}</li>
            <li>Sp. Attack - {allCards[cardNo].base.SpAttack}</li>
            <li>Sp. Defense - {allCards[cardNo].base.SpDefense}</li>
            <li>Speed - {allCards[cardNo].base.Speed}</li>
          </ul>
        </div>
      </div>
      )}
    </>
  )
}

export default SingleCard
