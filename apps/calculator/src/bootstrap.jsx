/* eslint-disable import/no-unresolved */
import '@webcomponents/webcomponentsjs';
import './styles.css';
import React from 'zarkit/react';
import ReactDom from 'zarkit/react-dom';
import { Provider } from 'zarkit/react-redux';
import Calculator from './features/calculator/Calculator';
import { store } from './app/store';

ReactDom.render(
  <Provider store={store}>
    <Calculator />
  </Provider>,
  document.getElementById('app')
);
