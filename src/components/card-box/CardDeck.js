import React, { useState } from 'react';
import SingleCard from '../cards/SingleCard';

import './CardDeck.css';

function CardDeck(props) {
  console.log(props)

  const [coverCard, setCoverCard] = useState({display: 'none'});

  return (
    <>
      <div className="ai-card">
        <SingleCard allCards={props.allCards} cardNo={props.cardNo.cardsAI}/>
        <div className="card-options" style={coverCard}>
          <img src="http://www.skeel.de/img/pokemon-card-back.png" />
        </div>
      </div>

      <div className="player-card">
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
