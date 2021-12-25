import React, { useEffect } from 'zarkit/react';
import Button from 'zarkit/button';
import { fillIcons, icons as allIcons } from './Settings';

const Game = function (props: any) {
  const {
    flipped,
    setFlipped,
    solved,
    setSolved,
    time,
    setTime,
    timer,
    setTimer,
    bestTime,
    setBestTime,
    gameState,
    setGameState,
    size,
    icons,
    iconTheme,
  } = props;
  // Set events
  const cardOnClick = (i: number) => {
    // Ignore invalid clicks
    if (flipped.indexOf(i) !== -1 || solved.indexOf(i) !== -1) return;
    if (flipped.length >= 2) return;

    // Flip the clicked card
    setFlipped(flipped.concat(i));
  };

  // Event for replay button
  const replay = () => {
    // Set initial values
    fillIcons(props);
    setFlipped([...icons.keys()]);
    setSolved([]);
    setTime(0);
    clearInterval(timer);
    setTimer(undefined);
    // Initialize the timer
    setTimer(
      setInterval(() => {
        setTime((t = time) => t + 1);
      }, 1000)
    );
    setGameState('play');
    // Calculate hint delay time and flip cards till then
    const delay = size[0] * size[1] * 100 + 1000;
    setTimeout(() => {
      setFlipped([]);
    }, delay);
  };

  // checking flipped cards are the same?
  useEffect(() => {
    if (flipped.length === 2) {
      setTimeout(() => {
        // check if flipped cards do match
        if (icons[flipped[0]] === icons[flipped[1]]) {
          setSolved(solved.concat(flipped[0], flipped[1]));
        }
        // flip cards back again
        setFlipped([]);
      }, 500);
    }
  }, [flipped]);

  // Check victory
  useEffect(() => {
    // Check if all cards are solved
    if (solved.length !== 0 && solved.length === icons.length) {
      setGameState('won');
      clearInterval(timer);
      setTimer(undefined);
      // Check for new record
      if (
        !Object.prototype.hasOwnProperty.call(bestTime, size.join('x')) ||
        time < parseInt(bestTime[size.join('x')], 10)
      ) {
        const newBest = bestTime;
        newBest[size.join('x')] = time;
        setBestTime(newBest);
        localStorage.setItem('pairMatchingBestTime', JSON.stringify(newBest));
      }
    }
  }, [solved]);

  const renderCards = () =>
    // Loop over cards and render
    icons.map((icon: any, i: number) => {
      // check state of the cards
      const cardFlipped = flipped.indexOf(i) !== -1 ? ' flipped' : '';
      const cardSolved = solved.indexOf(i) !== -1 ? ' solved' : '';

      // render card with its state class
      return (
        <div
          className={`card${cardFlipped}${cardSolved}`}
          data-name={icon}
          key={`card-${i}`}
          onClick={() => cardOnClick(i)}
          role="button"
        >
          <div className="front" />
          <div className="back" dangerouslySetInnerHTML={{ __html: allIcons[iconTheme][icon] }} />
        </div>
      );
    });
  // game grid
  return (
    <div className={`game size${size[0]}`}>
      {renderCards()}
      {gameState === 'init' ? (
        <div className="overlay">
          <Button onClick={replay} unelevated>
            شروع بازی
          </Button>
        </div>
      ) : null}
      {gameState === 'won' ? (
        <div className="overlay">
          <span>تبریک! شما برنده شدید</span>
          <Button onClick={replay} unelevated>
            بازی دوباره
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default Game;
