import {
  addToExpression,
  solveExpression,
  addCloseParenthesis,
  clearEntry,
} from './calculatorSlice';

// This file exports an array that holds data of
// all buttons which there are in the MainPanel Component
export default [
  // Buttons of row 1
  {
    payload: {
      id: 'open-parenthesis',
      type: 'function',
      value: '()',
      monitorValue: '()',
    },
    label: '(',
    keyboardEventKey: '(',
    class: 'gray-button',
    createAction() {
      return addToExpression(this.payload);
    },
  },
  {
    payload: { id: 'close-parenthesis' },
    label: ')',
    keyboardEventKey: ')',
    class: 'gray-button',
    createAction() {
      return addCloseParenthesis(this.payload);
    },
  },
  {
    payload: {
      id: 'percentage',
      type: 'operand',
      value: '%',
      monitorValue: '%',
    },
    label: '%',
    keyboardEventKey: '%',
    class: 'gray-button',
    createAction() {
      return addToExpression(this.payload);
    },
  },
  {
    payload: { id: 'ce', type: 'operation' },
    label: 'CE',
    keyboardEventKey: 'Backspace',
    class: 'gray-button small-font-button',
    createAction() {
      return clearEntry(this.payload);
    },
  },
  // Buttons of row 2
  {
    payload: {
      id: 'seven',
      type: 'operand',
      value: '7',
      monitorValue: '7',
    },
    label: '7',
    keyboardEventKey: '7',
    createAction() {
      return addToExpression(this.payload);
    },
  },
  {
    payload: {
      id: 'eight',
      type: 'operand',
      value: '8',
      monitorValue: '8',
    },
    label: '8',
    keyboardEventKey: '8',
    createAction() {
      return addToExpression(this.payload);
    },
  },
  {
    payload: {
      id: 'nine',
      type: 'operand',
      value: '9',
      monitorValue: '9',
    },
    label: '9',
    keyboardEventKey: '9',
    createAction() {
      return addToExpression(this.payload);
    },
  },
  {
    payload: {
      id: 'divide',
      type: 'operator',
      value: '/',
      monitorValue: '÷',
    },
    label: '÷',
    keyboardEventKey: '/',
    class: 'gray-button big-font-button',
    createAction() {
      return addToExpression(this.payload);
    },
  },
  // Buttons of row 3
  {
    payload: {
      id: 'four',
      type: 'operand',
      value: '4',
      monitorValue: '4',
    },
    label: '4',
    keyboardEventKey: '4',
    createAction() {
      return addToExpression(this.payload);
    },
  },
  {
    payload: {
      id: 'five',
      type: 'operand',
      value: '5',
      monitorValue: '5',
    },
    label: '5',
    keyboardEventKey: '5',
    createAction() {
      return addToExpression(this.payload);
    },
  },
  {
    payload: {
      id: 'six',
      type: 'operand',
      value: '6',
      monitorValue: '6',
    },
    label: '6',
    keyboardEventKey: '6',
    createAction() {
      return addToExpression(this.payload);
    },
  },
  {
    payload: {
      id: 'multiply',
      type: 'operator',
      value: '*',
      monitorValue: '×',
    },
    label: '×',
    keyboardEventKey: '*',
    class: 'gray-button big-font-button',
    createAction() {
      return addToExpression(this.payload);
    },
  },
  // Buttons of row 4
  {
    payload: {
      id: 'one',
      type: 'operand',
      value: '1',
      monitorValue: '1',
    },
    label: '1',
    keyboardEventKey: '1',
    createAction() {
      return addToExpression(this.payload);
    },
  },
  {
    payload: {
      id: 'two',
      type: 'operand',
      value: '2',
      monitorValue: '2',
    },
    label: '2',
    keyboardEventKey: '2',
    createAction() {
      return addToExpression(this.payload);
    },
  },
  {
    payload: {
      id: 'three',
      type: 'operand',
      value: '3',
      monitorValue: '3',
    },
    label: '3',
    keyboardEventKey: '3',
    createAction() {
      return addToExpression(this.payload);
    },
  },
  {
    payload: {
      id: 'minus',
      type: 'operator',
      value: '-',
      monitorValue: '−',
    },
    label: '−',
    keyboardEventKey: '-',
    class: 'gray-button big-font-button',
    createAction() {
      return addToExpression(this.payload);
    },
  },
  // Buttons of row 5
  {
    payload: {
      id: 'zero',
      type: 'operand',
      value: '0',
      monitorValue: '0',
    },
    label: '0',
    keyboardEventKey: '0',
    createAction() {
      return addToExpression(this.payload);
    },
  },
  {
    payload: {
      id: 'point',
      type: 'operand',
      value: '.',
      monitorValue: '.',
    },
    label: '.',
    keyboardEventKey: '.',
    class: 'big-font-button bold-font-button',
    createAction() {
      return addToExpression(this.payload);
    },
  },
  {
    payload: { id: 'equals' },
    label: '=',
    keyboardEventKey: '=',
    class: 'blue-button big-font-button bold-font-button',
    createAction() {
      return solveExpression(this.payload);
    },
  },
  {
    payload: {
      id: 'plus',
      type: 'operator',
      value: '+',
      monitorValue: '+',
    },
    label: '+',
    keyboardEventKey: '+',
    class: 'gray-button big-font-button',
    createAction() {
      return addToExpression(this.payload);
    },
  },
];
