import React from 'zarkit/react';
import { useSelector } from 'zarkit/react-redux';
import { selectPrimaryMonitor } from './calculatorSlice';


function Monitor() {
    
    const primaryMonitor = useSelector(selectPrimaryMonitor);

    return (
        <div id='monitor'>
            <div>{primaryMonitor ? primaryMonitor : 0}</div>
        </div>
    );
}

export default Monitor;
