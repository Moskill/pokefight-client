import React, { useState, useContext, useEffect } from 'react';
import SingleCard from '../cards/SingleCard';
import { CardsContext } from '../../App';
import './CardDeck.css';

function CardDeck({hasTurn, makeTurn}) {
  const cardNo = useContext(CardsContext);
  const [cardPosition, setCardPosition] = useState({ai: {top: 11 + '%'}, player: {top: 65 + '%'}})
  const [coverCard, setCoverCard] = useState({display: 'none'});

  const cardHandler = (member = null) => {
    if(member === 'AI') {
      setTimeout(() => {setCardPosition({ai: {top: 26 + '%'}})}, 2000)
    } else {
      setCardPosition({...cardPosition, player: {top: 54 + '%'}});
      makeTurn('Player')
    }
  }

  useEffect(() => {
      if(hasTurn === 'AI') {
      cardHandler('AI');
      console.log('Computer ist am Zug!', cardNo.cardsAI)
    } else if(hasTurn === 'Player') {
      console.log('Play ist jetzt dran')
    }
  }, [hasTurn])

  return (
    <>
      <div className="ai-card" style={cardPosition.ai} id="aiCard">
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
