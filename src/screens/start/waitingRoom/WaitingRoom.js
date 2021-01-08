/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './waitingRoom.scss';

const PlayerList = ({playerList}) => {
  playerList.map((player, index) => (
    // eslint-disable-next-line react/jsx-key
    <ol>{`${index + 1}: `}{player.name}</ol>
  ));
};

const WaitingRoom = ({state}) => {
  const [gameCode, setGameCode] = useState('');
  const [playerList, setPlayerList] = useState([]);

  // useEffect(() => playerList);

  const renderPlayerList = (playerList) => {
    
  };

  return (
    <div className="tb-waiting-room__container">
      <h1>Game Code: {gameCode} </h1>
      <div className="tb-waiting-room__player-list">
        {renderPlayerList(playerList)}
      </div>
    </div>
  );
};

export default WaitingRoom;
