/* eslint-disable import/no-unresolved */
import React from 'zarkit/react';
import { useSelector } from 'zarkit/react-redux';
import { selectPrimaryMonitor, selectSecondaryMonitor } from './calculatorSlice';

const styles = {
  secondaryMonitor: {
    visibility: 'hidden',
  },
};

const Monitor = function () {
  const primaryMonitor = useSelector(selectPrimaryMonitor);
  const secondaryMonitor = useSelector(selectSecondaryMonitor);

  return (
    <div id="monitor">
      {/* Hides secondary monitor if it's an empty string */}
      <div id="secondary-monitor" style={secondaryMonitor ? null : styles.secondaryMonitor}>
        {secondaryMonitor || 0}
      </div>
      {/* Shows zero in primary monitor if the primary monitor is an empty string */}
      <div id="primary-monitor">{primaryMonitor || 0}</div>
    </div>
  );
};

export default Monitor;
