/* eslint-disable import/no-unresolved */
import React from 'zarkit/react';
import '@material/mwc-button';
import { useDispatch } from 'zarkit/react-redux';
import mainButtonsDataList from './mainButtonsDataList';

// This Component returns all Main buttons includes their configuration
const MainPanel = function () {
  const dispatch = useDispatch();

  return (
    <div id="main-panel">
      {mainButtonsDataList.map((button) => (
        <mwc-button
          key={button.payload.id}
          class={button.class}
          onClick={() => dispatch(button.createAction())}
          label={button.label}
          unelevated
        />
      ))}
    </div>
  );
};

export default MainPanel;
