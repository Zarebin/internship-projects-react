import { createSlice } from 'zarkit/@reduxjs/toolkit';
import { create, all } from 'mathjs';
import { original } from 'immer';
const math = create(all);

const initialState = {
    expressionHistory: [],
    ans: 0,
    expression: '',
    cursor: 0,
    monitorExpression: '',
    monitorCursor: 0,
    primaryMonitor: '',
};

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addToExpression(state, action) {

            let lastAddition = getLastAddition(state);
            let currentAddition = getCurrentAddition(action);

            enableSmartAddition(state, action);
            exceptionalFeatueresAddition(state, action);

            if (isValidAddition(lastAddition, currentAddition)) {
                const start = state.expression.slice(0, state.cursor);
                const end = state.expression.slice(state.cursor, state.expression.length);
                state.expression = start + currentAddition.value + end;
                state.cursor += currentAddition.value.length;

                const monitorStart = state.monitorExpression.slice(0, state.monitorCursor);
                const monitorEnd = state.monitorExpression.slice(state.monitorCursor, state.monitorExpression.length);
                state.monitorExpression = monitorStart + currentAddition.monitorValue + monitorEnd;
                state.monitorCursor += currentAddition.monitorValue.length;

                if (currentAddition.type === 'function') {
                    state.cursor--;
                    state.monitorCursor--;
                }
                state.expressionHistory.push(currentAddition);
                state.primaryMonitor = state.monitorExpression;
            }
        },
        solveExpression(state, action) {
            const lastAddition = getLastAddition(state);
            const currentAddition = getCurrentAddition(action);
            if (isValidAddition(lastAddition, currentAddition)) {
                let result;
                try {
                    result = Number(math.evaluate(state.expression ? state.expression : '0').toFixed(11));
                    if (!Number.isNaN(result)) {
                        state.ans = result;
                        state.expression = '' + state.ans;
                        state.cursor = state.expression.length;
                        state.monitorExpression = '' + state.ans;
                        state.monitorCursor = state.monitorExpression.length;
                        state.primaryMonitor = state.monitorExpression;
                        const currentAddition = getCurrentAddition(action);
                        state.expressionHistory.push(currentAddition);
                    }
                } catch (error) {
                    state.primaryMonitor = 'Error';
                    state.expressionHistory = [];
                    state.expression = '';
                    state.cursor = 0;
                    state.monitorExpression = '';
                    state.monitorCursor = 0;
                }
            };
        },
        addCloseParenthesis(state, action) {
            const lastAddition = getLastAddition(state);
            const currentAddition = getCurrentAddition(action);
            if (isValidAddition(lastAddition, currentAddition)) {
                if (state.expression.length !== state.cursor) {
                    state.cursor++;
                    state.monitorCursor++;
                    const currentAddition = getCurrentAddition(action);
                    state.expressionHistory.push(currentAddition);
                }
            }
        },
        clearEntry(state, action) {
            let expressionHistory = original(state.expressionHistory);
            const lastAddition = expressionHistory[expressionHistory.length - 1];
            state.expressionHistory.pop();
            if (lastAddition !== undefined) {
                if (lastAddition.type === 'operand' || lastAddition.type === 'operator' || lastAddition.type === 'function') {
                    const start = state.expression.slice(0, state.expression.lastIndexOf(lastAddition.value));
                    const end = state.expression.slice(state.expression.lastIndexOf(lastAddition.value) + lastAddition.value.length, state.expression.length);
                    state.expression = start + end;
                    state.cursor -= lastAddition.value.length;

                    const monitorStart = state.monitorExpression.slice(0, state.monitorExpression.lastIndexOf(lastAddition.monitorValue));
                    const monitorEnd = state.monitorExpression.slice(state.monitorExpression.lastIndexOf(lastAddition.monitorValue) + lastAddition.monitorValue.length, state.monitorExpression.length);
                    state.monitorExpression = monitorStart + monitorEnd;
                    state.monitorCursor -= lastAddition.monitorValue.length;

                    if (lastAddition.type === 'function') {
                        state.cursor++;
                        state.monitorCursor++;
                    }
                } else if (lastAddition.id === 'equals') {
                    state.expression = '';
                    state.cursor = 0;
                    state.monitorExpression = '';
                    state.monitorCursor = 0;
                    state.expressionHistory = [];
                } else if (lastAddition.id === 'close-parenthesis') {
                    state.cursor--;
                    state.monitorCursor--;
                }
            }
            state.primaryMonitor = state.monitorExpression.length === 0 ? 0 : state.monitorExpression;
        }
    }
});

export const { addToExpression, solveExpression, addCloseParenthesis, clearEntry } = calculatorSlice.actions;

export const selectAns = state => state.calculator.ans;
export const selectExpression = state => state.calculator.expression;
export const selectCursor = state => state.calculator.cursor;
export const selectMonitorExpression = state => state.calculator.monitorExpression;
export const selectMonitorCursor = state => state.calculator.monitorCursor;
export const selectExpressionHistory = state => state.calculator.expressionHistory;
export const selectPrimaryMonitor = state => state.calculator.primaryMonitor;

export default calculatorSlice.reducer;





function getCurrentAddition(action) {
    let currentAddition = {
        id: action.payload.id,
        type: action.payload.type,
        value: action.payload.value,
        label: action.payload.label,
        monitorValue: action.payload.monitorValue,
    };
    return currentAddition;
}

function getLastAddition(state) {
    let expressionHistory = original(state.expressionHistory);
    const lastAddition = expressionHistory[expressionHistory.length - 1];
    return lastAddition;
}

function isValidAddition(lastAddition, currentAddition) {
    if (currentAddition.id === 'close-parenthesis') {
        if (lastAddition !== undefined) {
            if (lastAddition.id === 'open-parenthesis' || lastAddition.id === 'close-parenthesis' || lastAddition.type === 'operator') {
                return false;
            }
        }
    } else if (currentAddition.type === 'operator') {
        if (lastAddition === undefined) {
            if (currentAddition.id !== 'plus' && currentAddition.id !== 'minus') {
                return false;
            }
        } else if (lastAddition.type === 'function') {
            if (currentAddition.id !== 'plus' && currentAddition.id !== 'minus') {
                return false;
            }
        } else if (lastAddition.id === 'point') {
            return false;
        }
    } else if (currentAddition.id === 'equals') {
        if (lastAddition !== undefined) {
            if (lastAddition.type === 'function' || lastAddition.type === 'operator') {
                return false;
            }
        }
    } else if (currentAddition.id === 'percentage') {
        if (lastAddition === undefined) {
            return false;
        } else if (lastAddition.type === 'function' || lastAddition.type === 'operator') {
            return false;
        } else if (lastAddition.id === 'point') {
            return false;
        }
    } else if (currentAddition.type === 'operand') {
        if (lastAddition !== undefined) {
            if (lastAddition.id === 'percentage') {
                return false;
            }
        }
    } else if (currentAddition.type === 'function') {
        if (lastAddition !== undefined) {
            if (lastAddition.id === 'percentage') {
                return false;
            }
        }
    }
    return true;
}

function enableSmartAddition(state, action) {
    let lastAddition = getLastAddition(state);
    let currentAddition = getCurrentAddition(action);

    if (lastAddition !== undefined) {
        if (lastAddition.id === 'equals' && !(currentAddition.type === 'operator' || currentAddition.id === 'percentage')) {
            state.expression = '';
            state.monitorExpression = '';
            state.cursor = 0;
            state.monitorCursor = 0;
            state.expressionHistory = [];
        }
    }


    if (lastAddition !== undefined) {
        if (currentAddition.type === 'operator' && lastAddition.type === 'operator') {
            const start = state.expression.slice(0, state.expression.lastIndexOf(lastAddition.value));
            const end = state.expression.slice(state.expression.lastIndexOf(lastAddition.value) + lastAddition.value.length, state.expression.length);
            state.expression = start + end;
            state.cursor -= lastAddition.value.length;

            const monitorStart = state.monitorExpression.slice(0, state.monitorExpression.lastIndexOf(lastAddition.monitorValue));
            const monitorEnd = state.monitorExpression.slice(state.monitorExpression.lastIndexOf(lastAddition.monitorValue) + lastAddition.monitorValue.length, state.monitorExpression.length);
            state.monitorExpression = monitorStart + monitorEnd;
            state.monitorCursor -= lastAddition.monitorValue.length;
        }
    }
}

function exceptionalFeatueresAddition(state, action) {
    let currentAddition = getCurrentAddition(action);

    if (currentAddition.id === 'ans') {
        currentAddition.value = state.ans;
        currentAddition.monitorValue = 'Ans';
    }
}
