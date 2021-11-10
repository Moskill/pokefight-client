import React from 'react';
import './ScoreDisplay.css';

function ScoreDisplay(props) {
  return (
    <>
      <div className="scoreboard-wrapper">
        {props.type}
      </div>
    </>
  )
}

export default ScoreDisplay
