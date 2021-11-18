import React, { useState } from 'zarkit/react';
import Monitor from './Monitor';
import MainPanel from './MainPanel';
import { useDispatch } from 'zarkit/react-redux';
import { addToExpression, equals, closeParenthesis, CE } from './calculatorSlice';

function Calculator() {
    const dispatch = useDispatch();

    return (
        <div id='container' onKeyDown={(e) => { keydownHandler(e, dispatch) }} tabIndex="0">
            <Monitor />
            <MainPanel />
        </div>
    );
}

function keydownHandler(e, dispatch) {

    switch (e.key) {
        case '(':
            dispatch(addToExpression(
                { id: "open-parenthesis", type: "function", label: "(", value: "()", monitorValue: "()" }
            ));
            break;
        case ')':
            dispatch(closeParenthesis(
                { id: "close-parenthesis", label: ")" }
            ));
            break;

        case '%':
            dispatch(addToExpression(
                { id: "percentage", type: "operand", label: "%", value: "%", monitorValue: "%" }
            ));
            break;
        case 'Backspace':
            dispatch(CE(
                { id: "ce", type: "operation", label: "CE" }
            ));
            break;
        case '7':
            dispatch(addToExpression(
                { id: "seven", type: "operand", label: "7", value: "7", monitorValue: "7" }
            ));
            break;
        case '8':
            dispatch(addToExpression(
                { id: "eight", type: "operand", label: "8", value: "8", monitorValue: "8" }
            ));
            break;
        case '9':
            dispatch(addToExpression(
                { id: "nine", type: "operand", label: "9", value: "9", monitorValue: "9" }
            ));
            break;
        case '/':
            dispatch(addToExpression(
                { id: "divide", type: "operator", label: "÷", value: "/", monitorValue: "÷" }
            ));
            break;
        case '4':
            dispatch(addToExpression(
                { id: "four", type: "operand", label: "4", value: "4", monitorValue: "4" }
            ));
            break;
        case '5':
            dispatch(addToExpression(
                { id: "five", type: "operand", label: "5", value: "5", monitorValue: "5" }
            ));
            break;
        case '6':
            dispatch(addToExpression(
                { id: "six", type: "operand", label: "6", value: "6", monitorValue: "6" }
            ));
            break;
        case '*':
            dispatch(addToExpression(
                { id: "multiply", type: "operator", label: "×", value: "*", monitorValue: "×" }
            ));
            break;
        case '1':
            dispatch(addToExpression(
                { id: "one", type: "operand", label: "1", value: "1", monitorValue: "1" }
            ));
            break;
        case '2':
            dispatch(addToExpression(
                { id: "two", type: "operand", label: "2", value: "2", monitorValue: "2" }
            ));
            break;
        case '3':
            dispatch(addToExpression(
                { id: "three", type: "operand", label: "3", value: "3", monitorValue: "3" }
            ));
            break;
        case '-':
            dispatch(addToExpression(
                { id: "minus", type: "operator", label: "-", value: "-", monitorValue: "-" }
            ));
            break;
        case '0':
            dispatch(addToExpression(
                { id: "zero", type: "operand", label: "0", value: "0", monitorValue: "0" }
            ));
            break;
        case '.':
            dispatch(addToExpression(
                { id: "point", type: "operand", label: ".", value: ".", monitorValue: "." }
            ));
            break;
        case '=':
            dispatch(equals(
                { id: "equals", label: "=" }
            ));
            break;
        case '+':
            dispatch(addToExpression(
                { id: "plus", type: "operator", label: "+", value: "+", monitorValue: "+" }
            ));
            break;

        case 'Enter':
            dispatch(equals(
                { id: "equals", label: "=" }
            ));
            break;
        default:
            break;
    }
}
export default Calculator;
