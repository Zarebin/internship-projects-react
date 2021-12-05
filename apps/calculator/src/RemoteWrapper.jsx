/* eslint-disable import/no-unresolved */
import '@webcomponents/webcomponentsjs';
import './styles.css';
import React from 'zarkit/react';
import { Provider } from 'zarkit/react-redux';
import Calculator from './features/calculator/Calculator';
import { store } from './app/store';

const RemoteWrapper = function () {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
};

export default RemoteWrapper;
