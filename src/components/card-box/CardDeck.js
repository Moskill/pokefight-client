import React, { useState, useEffect } from 'react';
import SingleCard from '../cards/SingleCard';

import './CardDeck.css';

function CardDeck(props) {

  const [cardPosition, setCardPosition] = useState({ai: {top: 11 + '%'}, player: {top: 65 + '%'}})
  const [coverCard, setCoverCard] = useState({display: 'none'});

  const cardHandler = (e) => {
    console.log(e.target)
    setCardPosition({player: {top: 54 + '%'}})
    console.log(cardPosition);
  }


  return (
    <>
      <div className="ai-card" style={cardPosition} id="aiCard">
        <SingleCard allCards={props.allCards} cardNo={props.cardNo.cardsAI}/>
        <div className="card-options" style={{display: 'none'}}>
          <img src="http://www.skeel.de/img/pokemon-card-back.png" />
        </div>
      </div>

      <div className="player-card" style={cardPosition.player} onClick={cardHandler} >
        <SingleCard allCards={props.allCards} cardNo={props.cardNo.cardsPlayer}/>
        <div className="card-options" style={coverCard}>
          <img src="http://www.skeel.de/img/pokemon-card-back.png" />
        </div>
      </div>
      <div className="cardbox-wrapper"></div>
    </>
  )
}

export default CardDeck
