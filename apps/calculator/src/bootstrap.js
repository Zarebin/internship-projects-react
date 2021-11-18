import('@webcomponents/webcomponentsjs');
import css from './styles.css';
import React from 'zarkit/react';
import ReactDom from 'zarkit/react-dom';
import Calculator from './features/calculator/Calculator';
import { Provider } from 'zarkit/react-redux';
import { store } from './app/store';

ReactDom.render(
    <Provider store={store}>
        <Calculator />
    </Provider>,
    document.getElementById('app')
);
