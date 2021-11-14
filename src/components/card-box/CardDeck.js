import React, { useState, useContext, useEffect } from 'react';
import SingleCard from '../cards/SingleCard';
import { CardsContext } from '../../App';
import './CardDeck.css';

function CardDeck({hasTurn, makeTurn}) {

  const initialCardPos = {ai: {top: 11 + '%'}, player: {top: 65 + '%'}};
  const cardNo = useContext(CardsContext);
  const [cardPosition, setCardPosition] = useState({ai: {top: 11 + '%'}, player: {top: 65 + '%'}})
  const [coverCard, setCoverCard] = useState({display: 'block'});

  const cardHandler = (member = null) => {
    if(member === 'AI') {
      setTimeout(() => {
        setCardPosition({ai: {top: 26 + '%'}})
        setCoverCard({display: 'none'})
      }, 2000);
      
    } else {
      setCardPosition({...cardPosition, player: {top: 54 + '%'}});
      makeTurn('Player')
    }
  }

  useEffect(() => {
    if(hasTurn === 'AI') {
      cardHandler('AI');
    } else if(hasTurn === 'Player') {
      
    }
  }, [hasTurn])

  console.log(hasTurn)

  return (
    <>
      <div className="ai-card" style={cardPosition.ai} id="aiCard">
        <SingleCard cardNo={cardNo.cardsAI}/>
        <div className="card-options" style={coverCard}>
          <img src="http://www.skeel.de/img/pokemon-card-back.png" />
        </div>
      </div>

      <div className="player-card" style={cardPosition.player} onClick={cardHandler} >
        <SingleCard cardNo={cardNo.cardsPlayer}/>

      </div>
      <div className="cardbox-wrapper"></div>
    </>
  )
}

export default CardDeck
