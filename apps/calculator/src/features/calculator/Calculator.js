import React from 'zarkit/react';
import Monitor from './Monitor';
import MainPanel from './MainPanel';
import useKeyboard from './useKeyboard';

function Calculator() {

    const keyboardEventsHandler = useKeyboard();

    return (
        <div id='container' onKeyDown={(e) => { keyboardEventsHandler(e); }} tabIndex="0">
            <Monitor />
            <MainPanel />
        </div>
    );
}

export default Calculator;
