import React, { useState, useContext } from 'react';
import SingleCard from '../cards/SingleCard';
import { PokemonListContext } from '../../App';
import { CardsContext } from '../../App';
import './CardDeck.css';

function CardDeck() {

  const cardNo = useContext(CardsContext);

  const [cardPosition, setCardPosition] = useState({ai: {top: 11 + '%'}, player: {top: 65 + '%'}})
  const [coverCard, setCoverCard] = useState({display: 'none'});

  const cardHandler = (e) => {
    setCardPosition({player: {top: 54 + '%'}})
  }


  return (
    <>
      <div className="ai-card" style={cardPosition} id="aiCard">
        <SingleCard cardNo={cardNo.cardsAI}/>
        <div className="card-options" style={{display: 'none'}}>
          <img src="http://www.skeel.de/img/pokemon-card-back.png" />
        </div>
      </div>

      <div className="player-card" style={cardPosition.player} onClick={cardHandler} >
        <SingleCard cardNo={cardNo.cardsPlayer}/>
        <div className="card-options" style={coverCard}>
          <img src="http://www.skeel.de/img/pokemon-card-back.png" />
        </div>
      </div>
      <div className="cardbox-wrapper"></div>
    </>
  )
}

export default CardDeck
