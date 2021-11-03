import React, { useState } from 'react';
import './SingleCard.css';

function SingleCard({props, cardNo}) {

  const cardImg = `https://img.pokemondb.net/artwork/large/${props && props[cardNo].name.english.toLowerCase()}.jpg`;

  
  const [pokemon, setPokemon] = useState({});
  
  console.log(props)
  // https://pokemondeathmatch.herokuapp.com/

  const imageHandler = (requestedPokemon) => {
      return `https://img.pokemondb.net/artwork/large/${requestedPokemon}.jpg`
    }

  return (
    <>
    {props && (
      <div className="main-wrappper">
        <div className="card-header">
          <div className="card-title">{props[cardNo].name.english}</div>
          <div className="card-hp">HP {props[cardNo].base.HP}</div>
        </div>
        <div className="card-image">
        <img src={cardImg} className="card-image-inner" height="100" alt="Pokemon-Card" />
        </div>
        <div className="card-attack">
          <ul className="card-base-list">
            <li>Attack - {props[cardNo].base.Attack}</li>
            <li>Defense - {props[cardNo].base.Defense}</li>
            <li>Attack - {props[cardNo].base.Attack}</li>
            <li>Defense - {props[cardNo].base.Defense}</li>
            <li>Speed - {props[cardNo].base.Speed}</li>
          </ul>
        </div>
        <div className="card-options"></div>
      </div>
      )}
    </>
  )
}

export default SingleCard
