import React from 'react';
import './ScoreDisplay.css';

function ScoreDisplay(props) {
  return (
    <>
      <div className="scoreboard-wrapper">
        <h3>{props.type}</h3>
        <h1>{props.pointsAI}</h1>
        <h1>{props.pointsPlayer}</h1>
      </div>
    </>
  )
}

export default ScoreDisplay
