import React from 'zarkit/react';
import Monitor from './Monitor';
import MainPanel from './MainPanel';
import useKeyboard from './useKeyboard';

function Calculator() {
    // Gets a function from useKeyboard hook that gets an event and handles any valid keyboard event
    const keyboardEventsHandler = useKeyboard();

    return (
        <div id='container' onKeyDown={(e) => { keyboardEventsHandler(e); }} tabIndex="0">
            <Monitor />
            <MainPanel />
        </div>
    );
}

export default Calculator;
