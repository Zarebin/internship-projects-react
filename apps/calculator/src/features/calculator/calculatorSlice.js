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
    secondaryMonitor: '',
};

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        // A reducer function that handles adding an entry to expression
        addToExpression(state, action) {
            let lastEntry = getLastEntry(state);
            let currentEntry = getCurrentEntry(action);

            enableSmartAddition(state, action);
            exceptionalFeatueresAddition(state, action);

            // Checks if addition is valid then adds the entry to expression and works on the related state changes
            if (isValidOperation(lastEntry, currentEntry)) {
                const start = state.expression.slice(0, state.cursor);
                const end = state.expression.slice(state.cursor, state.expression.length);
                state.expression = start + currentEntry.value + end;
                state.cursor += currentEntry.value.length;

                const monitorStart = state.monitorExpression.slice(0, state.monitorCursor);
                const monitorEnd = state.monitorExpression.slice(state.monitorCursor, state.monitorExpression.length);
                state.monitorExpression = monitorStart + currentEntry.monitorValue + monitorEnd;
                state.monitorCursor += currentEntry.monitorValue.length;

                if (currentEntry.type === 'function') {
                    state.cursor--;
                    state.monitorCursor--;
                }
                state.expressionHistory.push(currentEntry);
                state.primaryMonitor = state.monitorExpression;
                state.secondaryMonitor = 'Ans' + '=' + state.ans
            }
        },
        // A reducer function that solves the entry expression and shows the result to the user
        solveExpression(state, action) {
            const lastEntry = getLastEntry(state);
            const currentEntry = getCurrentEntry(action);

            // Checks if request to solve expression is valid then solve the expression and works on the related state changes and if an error occurred shows "Error" to user
            if (isValidOperation(lastEntry, currentEntry)) {
                let result;
                try {
                    result = Number(math.evaluate(state.expression ? state.expression : '0').toFixed(11));
                    if (!Number.isNaN(result)) {
                        state.secondaryMonitor = state.monitorExpression + '=';
                        state.ans = result;
                        state.expression = '' + state.ans;
                        state.cursor = state.expression.length;
                        state.monitorExpression = '' + state.ans;
                        state.monitorCursor = state.monitorExpression.length;
                        state.primaryMonitor = state.monitorExpression;
                        const currentEntry = getCurrentEntry(action);
                        state.expressionHistory.push(currentEntry);
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
        // A reducer function that adds close parenthesis to expression
        addCloseParenthesis(state, action) {
            const lastEntry = getLastEntry(state);
            const currentEntry = getCurrentEntry(action);

            // Checks if addition is valid then adds close parenthesis by changing cursors and works on the related state changes
            if (isValidOperation(lastEntry, currentEntry)) {
                if (state.expression.length !== state.cursor) {
                    state.cursor++;
                    state.monitorCursor++;
                    state.expressionHistory.push(currentEntry);
                }
            }
        },
        // A reducer function that operates CE on expression
        clearEntry(state, action) {
            let expressionHistory = original(state.expressionHistory);
            const lastEntry = expressionHistory[expressionHistory.length - 1];
            state.expressionHistory.pop();
            state.secondaryMonitor = 'Ans' + '=' + state.ans;
            if (lastEntry !== undefined) {
                if (lastEntry.type === 'operand' || lastEntry.type === 'operator' || lastEntry.type === 'function') {
                    const start = state.expression.slice(0, state.expression.lastIndexOf(lastEntry.value));
                    const end = state.expression.slice(state.expression.lastIndexOf(lastEntry.value) + lastEntry.value.length, state.expression.length);
                    state.expression = start + end;
                    state.cursor -= lastEntry.value.length;

                    const monitorStart = state.monitorExpression.slice(0, state.monitorExpression.lastIndexOf(lastEntry.monitorValue));
                    const monitorEnd = state.monitorExpression.slice(state.monitorExpression.lastIndexOf(lastEntry.monitorValue) + lastEntry.monitorValue.length, state.monitorExpression.length);
                    state.monitorExpression = monitorStart + monitorEnd;
                    state.monitorCursor -= lastEntry.monitorValue.length;

                    if (lastEntry.type === 'function') {
                        state.cursor++;
                        state.monitorCursor++;
                    }
                } else if (lastEntry.id === 'equals') {
                    state.expression = '';
                    state.cursor = 0;
                    state.monitorExpression = '';
                    state.monitorCursor = 0;
                    state.expressionHistory = [];
                } else if (lastEntry.id === 'close-parenthesis') {
                    state.cursor--;
                    state.monitorCursor--;
                }
            }
            state.primaryMonitor = state.monitorExpression.length === 0 ? 0 : state.monitorExpression;
        }
    }
});

// Exports functions that return corresponding dispatch object to every reducer
export const { addToExpression, solveExpression, addCloseParenthesis, clearEntry } = calculatorSlice.actions;

// Exports selector functions corresponding to every variable in calculator state
export const selectAns = state => state.calculator.ans;
export const selectExpression = state => state.calculator.expression;
export const selectCursor = state => state.calculator.cursor;
export const selectMonitorExpression = state => state.calculator.monitorExpression;
export const selectMonitorCursor = state => state.calculator.monitorCursor;
export const selectExpressionHistory = state => state.calculator.expressionHistory;
export const selectPrimaryMonitor = state => state.calculator.primaryMonitor;
export const selectSecondaryMonitor = state => state.calculator.secondaryMonitor;

// Export reducer function that needs to add to the redux store
export default calculatorSlice.reducer;




// Creates current entry object from action parameter and return it
function getCurrentEntry(action) {
    let currentEntry = {
        id: action.payload.id,
        type: action.payload.type,
        value: action.payload.value,
        label: action.payload.label,
        monitorValue: action.payload.monitorValue,
    };
    return currentEntry;
}

// Read last entry object from state parameter and return it
function getLastEntry(state) {
    let expressionHistory = original(state.expressionHistory);
    const lastEntry = expressionHistory[expressionHistory.length - 1];
    return lastEntry;
}

// Gets lastEntry and currentEntry as a parameter and returns a boolean that determines current operation is valid or not
function isValidOperation(lastEntry, currentEntry) {
    if (currentEntry.id === 'close-parenthesis') {
        if (lastEntry !== undefined) {
            if (lastEntry.id === 'open-parenthesis' || lastEntry.id === 'close-parenthesis' || lastEntry.type === 'operator') {
                return false;
            } else if (lastEntry.id === 'point') {
                return false;
            }
        }
    } else if (currentEntry.type === 'operator') {
        if (lastEntry === undefined) {
            if (currentEntry.id !== 'plus' && currentEntry.id !== 'minus') {
                return false;
            }
        } else if (lastEntry.type === 'function') {
            if (currentEntry.id !== 'plus' && currentEntry.id !== 'minus') {
                return false;
            }
        } else if (lastEntry.id === 'point') {
            return false;
        }
    } else if (currentEntry.id === 'equals') {
        if (lastEntry !== undefined) {
            if (lastEntry.type === 'function' || lastEntry.type === 'operator') {
                return false;
            } else if (lastEntry.id === 'equals') {
                return false;
            } else if (lastEntry.id === 'point') {
                return false;
            }
        }
    } else if (currentEntry.id === 'percentage') {
        if (lastEntry === undefined) {
            return false;
        } else if (lastEntry.type === 'function' || lastEntry.type === 'operator') {
            return false;
        } else if (lastEntry.id === 'point') {
            return false;
        }
    } else if (currentEntry.id === 'point') {
        if (lastEntry !== undefined) {
            if (lastEntry.id === 'close-parenthesis') {
                return false;
            } else if (lastEntry.id === 'point') {
                return false
            }
        }
    } else if (currentEntry.type === 'operand') {
        if (lastEntry !== undefined) {
            if (lastEntry.id === 'percentage') {
                return false;
            }
        }
    } else if (currentEntry.type === 'function') {
        if (lastEntry !== undefined) {
            if (lastEntry.id === 'percentage') {
                return false;
            } else if (lastEntry.id === 'point') {
                return false;
            }
        }
    }
    return true;
}

// Adding some entries needs complement works to be a smart addition. calling this function operates this complement works and makes addition smarter.
function enableSmartAddition(state, action) {
    let lastEntry = getLastEntry(state);
    let currentEntry = getCurrentEntry(action);

    // Reset most of the state when gets equal as last entry except when gets an operator or percentage after that
    if (lastEntry !== undefined) {
        if (lastEntry.id === 'equals' && !(currentEntry.type === 'operator' || currentEntry.id === 'percentage')) {
            state.expression = '';
            state.monitorExpression = '';
            state.cursor = 0;
            state.monitorCursor = 0;
            state.expressionHistory = [];
        }
    }

    // Checks if last entry is an operator and gets another operator after it then replaces last entry with the new operator
    if (lastEntry !== undefined) {
        if (currentEntry.type === 'operator' && lastEntry.type === 'operator') {
            state.expressionHistory.pop();
            const start = state.expression.slice(0, state.expression.lastIndexOf(lastEntry.value));
            const end = state.expression.slice(state.expression.lastIndexOf(lastEntry.value) + lastEntry.value.length, state.expression.length);
            state.expression = start + end;
            state.cursor -= lastEntry.value.length;

            const monitorStart = state.monitorExpression.slice(0, state.monitorExpression.lastIndexOf(lastEntry.monitorValue));
            const monitorEnd = state.monitorExpression.slice(state.monitorExpression.lastIndexOf(lastEntry.monitorValue) + lastEntry.monitorValue.length, state.monitorExpression.length);
            state.monitorExpression = monitorStart + monitorEnd;
            state.monitorCursor -= lastEntry.monitorValue.length;
        }
    }
}

// Some entries (most of the advanced entries) need extra works in addition. this function provides this extra works.
function exceptionalFeatueresAddition(state, action) {
    let currentEntry = getCurrentEntry(action);

    if (currentEntry.id === 'ans') {
        currentEntry.value = state.ans;
        currentEntry.monitorValue = 'Ans';
    }
}
