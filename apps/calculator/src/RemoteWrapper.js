import '@webcomponents/webcomponentsjs';
import './styles.css';
import React from 'zarkit/react';
import Calculator from './features/calculator/Calculator';
import { Provider } from 'zarkit/react-redux';
import { store } from './app/store';

function RemoteWrapper() {
    return (
        <Provider store={store}>
            <Calculator />
        </Provider>
    );
}

export default RemoteWrapper;
