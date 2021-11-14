import React from 'react';
import './Canvas.css';
import ScoreDisplay from './ScoreDisplay';

function Canvas({points}) {

  // console.log(points, 'Canvas props');
 
  return (
    <>
      <div className="canvas-wrapper">
        <ScoreDisplay type={'ai'} pointsAI={points.AI}/>
        <ScoreDisplay type={'player'} pointsPlayer={points.Player}/>
      </div>
    </>
  )
}

export default Canvas
