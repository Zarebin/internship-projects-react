import React from 'zarkit/react';
import '@material/mwc-button';
import { useDispatch } from 'zarkit/react-redux';
import { addToExpression, equals, closeParenthesis, CE } from './calculatorSlice';

function MainPanel() {

    const dispatch = useDispatch();

    return (
        <div id='main-panel'>
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "open-parenthesis", type: "function", label: "(", value: "()", monitorValue: "()" }
                ))}
                label="(" raised
            />
            <mwc-button
                onClick={() => dispatch(closeParenthesis(
                    { id: "close-parenthesis", label: ")" }
                ))}
                label=")" raised
            />
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "percentage", type: "operator", label: "%", value: "%", monitorValue: "%" }
                ))}
                label="%" raised
            />
            <mwc-button
                onClick={() => dispatch(CE(
                    { id: "ce", type: "operation", label: "CE" }
                ))}
                label="CE" raised
            />

            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "seven", type: "operand", label: "7", value: "7", monitorValue: "7" }
                ))}
                label="7" raised
            />
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "eight", type: "operand", label: "8", value: "8", monitorValue: "8" }
                ))}
                label="8" raised
            />
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "nine", type: "operand", label: "9", value: "9", monitorValue: "9" }
                ))}
                label="9" raised
            />
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "divide", type: "operator", label: "÷", value: "/", monitorValue: "÷" }
                ))}
                label="÷" raised
            />

            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "four", type: "operand", label: "4", value: "4", monitorValue: "4" }
                ))}
                label="4" raised
            />
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "five", type: "operand", label: "5", value: "5", monitorValue: "5" }
                ))}
                label="5" raised
            />
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "six", type: "operand", label: "6", value: "6", monitorValue: "6" }
                ))}
                label="6" raised
            />
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "multiply", type: "operator", label: "×", value: "*", monitorValue: "×" }
                ))}
                label="×" raised
            />

            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "one", type: "operand", label: "1", value: "1", monitorValue: "1" }
                ))}
                label="1" raised
            />
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "two", type: "operand", label: "2", value: "2", monitorValue: "2" }
                ))}
                label="2" raised
            />
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "three", type: "operand", label: "3", value: "3", monitorValue: "3" }
                ))}
                label="3" raised
            />
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "minus", type: "operator", label: "-", value: "-", monitorValue: "-" }
                ))}
                label="-" raised
            />

            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "zero", type: "operand", label: "0", value: "0", monitorValue: "0" }
                ))}
                label="0" raised
            />
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "point", type: "operand", label: ".", value: ".", monitorValue: "." }
                ))}
                label="." raised
            />
            <mwc-button
                onClick={() => dispatch(equals(
                    { id: "equals", label: "(" }
                ))}
                label="=" raised
            />
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "plus", type: "operator", label: "+", value: "+", monitorValue: "+" }
                ))}
                label="+" raised
            />
        </div>
    );
}

export default MainPanel;
