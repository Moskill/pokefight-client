import React, { useState, useContext } from 'react';
import { PokemonListContext } from '../../App';
import './SingleCard.css';

function SingleCard({cardNo}) {
  const pokemonList = useContext(PokemonListContext);

  const cardImg = `https://img.pokemondb.net/artwork/large/${pokemonList && pokemonList[cardNo].name.english.toLowerCase()}.jpg`;
  
  return (
    <>
    {pokemonList && (
      <div className="main-wrappper">
        <div className="card-header">
          <div className="card-title">{pokemonList[cardNo].name.english}</div>
          <div className="card-hp"><span className="hp-style">HP </span>{pokemonList[cardNo].base.HP}</div>
        </div>
        <div className="card-image">
        <img src={cardImg} className="card-image-inner" height="100" alt="Pokemon-Card" />
        </div>
        <div className="card-attack">
          <ul className="card-base-list">
            <li>Attack - {pokemonList[cardNo].base.Attack}</li>
            <li>Defense - {pokemonList[cardNo].base.Defense}</li>
            <li>Sp. Attack - {pokemonList[cardNo].base.SpAttack}</li>
            <li>Sp. Defense - {pokemonList[cardNo].base.SpDefense}</li>
            <li>Speed - {pokemonList[cardNo].base.Speed}</li>
          </ul>
        </div>
      </div>
      )}
    </>
  )
}

export default SingleCard
