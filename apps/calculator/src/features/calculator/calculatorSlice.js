import { createSlice } from 'zarkit/@reduxjs/toolkit';
import { create, all } from 'mathjs';
const math = create(all);

const CONSTANTS = {
    NUMBER_PRECISION: 11
};

const initialState = {
    // Store history of entries
    expressionHistory: [],
    // Store value of ans Entry
    ans: 0,
    // Store matematical expression that must evaluates and returns result
    expression: '',
    // Store a cursor for expression
    cursor: 0,
    // Store a user-friendly representation for mathematical expression that shows to the app users
    monitorExpression: '',
    // Store a cursor for monitorExpression
    monitorCursor: 0,
    // Store value that shows in the primary monitor
    primaryMonitor: '',
    // Store value that shows in the secondary monitor
    secondaryMonitor: '',
};

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        // A reducer function that handles adding an entry to expression
        addToExpression(state, action) {
            performSmartAddition(state, action);

            // Checks if addition is valid then adds the entry to expression and works on the related state changes
            if (isValidOperation(state, action)) {
                addEntry(state, action);
            }
        },
        // A reducer function that solves the entry expression and shows the result to the user
        solveExpression(state, action) {
            // Checks if request to solve expression is valid then solve the expression and works on the related state changes and if an error occurred shows "Error" to user
            if (isValidOperation(state, action)) {
                try {
                    // Evaluate expression mathematically and store its result
                    const result = Number(math.evaluate(state.expression ? state.expression : '0').toFixed(CONSTANTS.NUMBER_PRECISION));
                    if (!Number.isNaN(result)) {
                        state.secondaryMonitor = state.monitorExpression + '=';
                        state.ans = result;
                        state.expression = '' + state.ans;
                        state.cursor = state.expression.length;
                        state.monitorExpression = '' + state.ans;
                        state.monitorCursor = state.monitorExpression.length;
                        state.primaryMonitor = state.monitorExpression;
                        state.expressionHistory.push(getCurrentEntry(action));
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
            if (isValidOperation(state, action)) {
                if (state.expression.length !== state.cursor) {
                    state.cursor++;
                    state.monitorCursor++;
                    state.expressionHistory.push(currentEntry);
                }
            }
        },
        // A reducer function that operates CE on expression
        clearEntry(state, action) {
            const lastEntry = getLastEntry(state);
            state.secondaryMonitor = 'Ans' + '=' + state.ans;
            if (lastEntry !== undefined) {
                if (lastEntry.id === 'equals') {
                    state.expression = '';
                    state.cursor = 0;
                    state.monitorExpression = '';
                    state.monitorCursor = 0;
                    state.expressionHistory = [];
                } else if (lastEntry.id === 'close-parenthesis') {
                    state.expressionHistory.pop();
                    state.cursor--;
                    state.monitorCursor--;
                } else if (lastEntry.type === 'operand' || lastEntry.type === 'operator' || lastEntry.type === 'function') {
                    removeEntry(state, action);
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
    const currentEntry =  {
        id: action.payload.id,
        type: action.payload.type,
        value: action.payload.value,
        monitorValue: action.payload.monitorValue,
    };
    switch (currentEntry.id) {
        case 'ans':
            currentEntry.value = state.ans;
            currentEntry.monitorValue = 'Ans';
            break;
        default:
            break;
    }
    return currentEntry;
}

// Read last entry object from state parameter and return it
function getLastEntry(state) {
    return state.expressionHistory[state.expressionHistory.length - 1];
}

// This function adds the current entry to the expression
function addEntry(state, action) {
    let currentEntry = getCurrentEntry(action);

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

// This function removes the last entry from the expression
function removeEntry(state, action) {
    let expressionHistory = state.expressionHistory;
    const lastEntry = expressionHistory[expressionHistory.length - 1];
    state.expressionHistory.pop();

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
}

// This function returns a boolean that determines current operation is valid or not
function isValidOperation(state, action) {
    let lastEntry = getLastEntry(state);
    let currentEntry = getCurrentEntry(action);

    switch (currentEntry.id) {
        case 'close-parenthesis':
            if (lastEntry !== undefined) {
                if (lastEntry.id === 'open-parenthesis' || lastEntry.id === 'close-parenthesis' || lastEntry.type === 'operator') {
                    return false;
                } else if (lastEntry.id === 'point') {
                    return false;
                }
            }
            break;
        case 'equals':
            if (lastEntry !== undefined) {
                if (lastEntry.type === 'function' || lastEntry.type === 'operator') {
                    return false;
                } else if (lastEntry.id === 'equals') {
                    return false;
                } else if (lastEntry.id === 'point') {
                    return false;
                }
            }
            else {
                return false;
            }
            break;
        case 'percentage':
            if (lastEntry === undefined) {
                return false;
            } else if (lastEntry.type === 'function' || lastEntry.type === 'operator') {
                return false;
            } else if (lastEntry.id === 'point') {
                return false;
            }
            break;
        case 'point':
            if (lastEntry !== undefined) {
                if (lastEntry.id === 'close-parenthesis') {
                    return false;
                } else if (lastEntry.id === 'point') {
                    return false
                } else if (lastEntry.id === 'percentage') {
                    return false
                }
            }
            break;
        default:
            break;
    }

    switch (currentEntry.type) {
        case 'operator':
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
            break;
        case 'operand':
            if (lastEntry !== undefined) {
                if (lastEntry.id === 'percentage') {
                    return false;
                }
            }
            break;
        case 'function':
            if (lastEntry !== undefined) {
                if (lastEntry.id === 'percentage') {
                    return false;
                } else if (lastEntry.id === 'point') {
                    return false;
                }
            }
            break;
        default:
            break;
    }
    return true;
}

// Adding some entries needs complement works to be a smart addition. calling this function operates this complement works and makes addition smarter.
function performSmartAddition(state, action) {
    let lastEntry = getLastEntry(state);
    let currentEntry = getCurrentEntry(action);

    if (lastEntry !== undefined) {
        // Reset most of the state when gets equals as last entry except when gets an operator or percentage after that
        if (lastEntry.id === 'equals' && !(currentEntry.type === 'operator' || currentEntry.id === 'percentage')) {
            state.expression = '';
            state.monitorExpression = '';
            state.cursor = 0;
            state.monitorCursor = 0;
            state.expressionHistory = [];
        }
        // Checks if last entry is an operator and gets another operator after it then replaces last entry with the new operator
        else if (lastEntry.type === 'operator' && currentEntry.type === 'operator') {
            removeEntry(state, action);
        }
    }
}
