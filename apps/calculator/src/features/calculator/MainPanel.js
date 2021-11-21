import React from 'zarkit/react';
import '@material/mwc-button';
import { useDispatch } from 'zarkit/react-redux';
import { addToExpression, solveExpression, addCloseParenthesis, clearEntry } from './calculatorSlice';

// This Component returns all Main buttons includes their configuration
function MainPanel() {

    const dispatch = useDispatch();
    
    return (
        <div id='main-panel'>
            <mwc-button
                class="gray-button"
                onClick={() => dispatch(addToExpression(
                    { id: "open-parenthesis", type: "function", label: "(", value: "()", monitorValue: "()" }
                ))}
                label="(" unelevated
            />
            <mwc-button
                class="gray-button"
                onClick={() => dispatch(addCloseParenthesis(
                    { id: "close-parenthesis", label: ")" }
                ))}
                label=")" unelevated
            />
            <mwc-button
                class="gray-button"
                onClick={() => dispatch(addToExpression(
                    { id: "percentage", type: "operand", label: "%", value: "%", monitorValue: "%" }
                ))}
                label="%" unelevated
            />
            <mwc-button
                class="gray-button small-font-button"
                onClick={() => dispatch(clearEntry(
                    { id: "ce", type: "operation", label: "CE" }
                ))}
                label="CE" unelevated
            />

            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "seven", type: "operand", label: "7", value: "7", monitorValue: "7" }
                ))}
                label="7" unelevated
            />
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "eight", type: "operand", label: "8", value: "8", monitorValue: "8" }
                ))}
                label="8" unelevated
            />
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "nine", type: "operand", label: "9", value: "9", monitorValue: "9" }
                ))}
                label="9" unelevated
            />
            <mwc-button
                class="gray-button big-font-button"
                onClick={() => dispatch(addToExpression(
                    { id: "divide", type: "operator", label: "÷", value: "/", monitorValue: "÷" }
                ))}
                label="÷" unelevated
            />

            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "four", type: "operand", label: "4", value: "4", monitorValue: "4" }
                ))}
                label="4" unelevated
            />
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "five", type: "operand", label: "5", value: "5", monitorValue: "5" }
                ))}
                label="5" unelevated
            />
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "six", type: "operand", label: "6", value: "6", monitorValue: "6" }
                ))}
                label="6" unelevated
            />
            <mwc-button
                class="gray-button big-font-button"
                onClick={() => dispatch(addToExpression(
                    { id: "multiply", type: "operator", label: "×", value: "*", monitorValue: "×" }
                ))}
                label="×" unelevated
            />

            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "one", type: "operand", label: "1", value: "1", monitorValue: "1" }
                ))}
                label="1" unelevated
            />
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "two", type: "operand", label: "2", value: "2", monitorValue: "2" }
                ))}
                label="2" unelevated
            />
            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "three", type: "operand", label: "3", value: "3", monitorValue: "3" }
                ))}
                label="3" unelevated
            />
            <mwc-button
                class="gray-button big-font-button"
                onClick={() => dispatch(addToExpression(
                    { id: "minus", type: "operator", label: "−", value: "-", monitorValue: "−" }
                ))}
                label="−" unelevated
            />

            <mwc-button
                onClick={() => dispatch(addToExpression(
                    { id: "zero", type: "operand", label: "0", value: "0", monitorValue: "0" }
                ))}
                label="0" unelevated
            />
            <mwc-button
                class="big-font-button"
                onClick={() => dispatch(addToExpression(
                    { id: "point", type: "operand", label: ".", value: ".", monitorValue: "." }
                ))}
                label="." unelevated
            />
            <mwc-button
                class="blue-button big-font-button"
                onClick={() => dispatch(solveExpression(
                    { id: "equals", label: "=" }
                ))}
                label="=" unelevated
            />
            <mwc-button
                class="gray-button big-font-button"
                onClick={() => dispatch(addToExpression(
                    { id: "plus", type: "operator", label: "+", value: "+", monitorValue: "+" }
                ))}
                label="+" unelevated
            />
        </div>
    );
}

export default MainPanel;
