import React from 'zarkit/react';
import '@material/mwc-button';
import { useDispatch } from 'zarkit/react-redux';
import mainButtonsDataList from './mainButtonsDataList';

// This Component returns all Main buttons includes their configuration
function MainPanel() {

    const dispatch = useDispatch();

    return (
        <div id='main-panel'>
            {mainButtonsDataList.map(button => {
                return (
                    <mwc-button
                        key={button.payload.id}
                        class={button.class}
                        onClick={() => dispatch(button.createAction())}
                        label={button.label}
                        unelevated
                    />
                );
            })}
        </div>
    );
}

export default MainPanel;
