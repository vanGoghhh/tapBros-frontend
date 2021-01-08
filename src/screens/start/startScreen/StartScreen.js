/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './startScreen.scss';

const StartScreen = () => {
  const [isNewGame, setIsNewGame] = useState(true);

  return (
    <div className="tb-start-screen__container">
      <h1>Tap Bros! Starring Sanraj</h1>
      <div className="tb-start-screen__button">
        <button type="button" onClick={() => setIsNewGame(true)}>Start Game</button>
      </div>
      <div className="tb-start-screen__button">
        <button type="button" onClick={() => setIsNewGame(false)}>Join Game</button>
      </div>
    </div>
  );
};

export default StartScreen;