import React, { useState } from 'zarkit/react';
import './PairMatching.scss';
import Settings from './Settings';
import Game from './Game';

const PairMatching = function () {
  // Define game states
  const [gameState, setGameState] = useState('init');
  const [icons, setIcons] = useState([]);
  const [iconTheme, setIconTheme] = useState('christmas');
  const [size, setSize] = useState([5, 6]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [time, setTime] = useState(0);
  const [bestTime, setBestTime] = useState(
    JSON.parse(localStorage.getItem('pairMatchingBestTime')) ?? {}
  );
  const [timer, setTimer] = useState();

  // Game dom
  return (
    <div className="pair-matching">
      <Settings
        icons={icons}
        setIcons={setIcons}
        iconTheme={iconTheme}
        setIconTheme={setIconTheme}
        size={size}
        setSize={setSize}
        setFlipped={setFlipped}
        setSolved={setSolved}
        time={time}
        setTime={setTime}
        bestTime={bestTime}
        setBestTime={setBestTime}
        gameState={gameState}
        setGameState={setGameState}
        timer={timer}
        setTimer={setTimer}
      />
      <Game
        icons={icons}
        setIcons={setIcons}
        size={size}
        iconTheme={iconTheme}
        setIconTheme={setIconTheme}
        flipped={flipped}
        setFlipped={setFlipped}
        solved={solved}
        setSolved={setSolved}
        time={time}
        setTime={setTime}
        bestTime={bestTime}
        setBestTime={setBestTime}
        gameState={gameState}
        setGameState={setGameState}
        timer={timer}
        setTimer={setTimer}
      />
    </div>
  );
};

export default PairMatching;
