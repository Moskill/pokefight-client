import React from 'react';
import './Canvas.css';
import ScoreDisplay from './ScoreDisplay';
import { startCards } from '../../context/pokemonContext';

function Canvas() {

  // console.log(startCards, 'Canvas');
 
  return (
    <>
      <div className="canvas-wrapper">
        <ScoreDisplay type={'ai'} />
        <ScoreDisplay type={'player'} />
      </div>
    </>
  )
}

export default Canvas
