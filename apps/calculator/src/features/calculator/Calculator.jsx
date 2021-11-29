/* eslint-disable import/no-unresolved */
import React from 'zarkit/react';
import Monitor from './Monitor';
import MainPanel from './MainPanel';
import useKeyboard from './useKeyboard';

const Calculator = function () {
  // Gets a function from useKeyboard hook that gets an event and handles any valid keyboard event
  const keyboardEventsHandler = useKeyboard();

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      id="container"
      onKeyDown={(e) => {
        keyboardEventsHandler(e);
      }}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex="0"
    >
      <Monitor />
      <MainPanel />
    </div>
  );
};

export default Calculator;
