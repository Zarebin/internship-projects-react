import React from 'zarkit/react';
import { useSelector } from 'zarkit/react-redux';
import { selectPrimaryMonitor, selectSecondaryMonitor } from './calculatorSlice';


function Monitor() {

    const primaryMonitor = useSelector(selectPrimaryMonitor);
    const secondaryMonitor = useSelector(selectSecondaryMonitor);

    return (
        <div id='monitor'>
            {/* Hides secondary monitor if it's an empty string */}
            <div id="secondary-monitor" style={secondaryMonitor ? null : styles.secondaryMonitor}>
                {secondaryMonitor ? secondaryMonitor : 0}
            </div>
            {/* Shows zero in primary monitor if the primary monitor is an empty string */}
            <div id="primary-monitor">{primaryMonitor ? primaryMonitor : 0}</div>
        </div>
    );
}

const styles = {
    secondaryMonitor: {
        visibility: 'hidden',
    }
}

export default Monitor;
