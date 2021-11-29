/* eslint-disable import/no-unresolved */
import { configureStore } from 'zarkit/@reduxjs/toolkit';
import calculatorReducer from '../features/calculator/calculatorSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});
