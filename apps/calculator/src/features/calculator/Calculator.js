import React, { useState } from 'zarkit/react';
import Monitor from './Monitor'
import MainPanel from './MainPanel';

function Calculator() {
    
    return (
        <div id='container'>
            <Monitor />
            <MainPanel />
        </div>
    );
}

export default Calculator;
