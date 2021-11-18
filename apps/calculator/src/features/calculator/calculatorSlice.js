import { createSlice } from 'zarkit/@reduxjs/toolkit';
import { create, all } from 'mathjs';
import { original } from 'immer';
const math = create(all);

const initialState = {
    buttonsHistory: [],
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

            let lastButton = getLastButton(state);
            let currentButton = getCurrentButton(action);

            activateSmartAddition(state, action);

            if (isValidButton(lastButton, currentButton)) {
                const start = state.expression.slice(0, state.cursor);
                const end = state.expression.slice(state.cursor, state.expression.length);
                state.expression = start + currentButton.value + end;
                state.cursor += currentButton.value.length;

                const monitorStart = state.monitorExpression.slice(0, state.monitorCursor);
                const monitorEnd = state.monitorExpression.slice(state.monitorCursor, state.monitorExpression.length);
                state.monitorExpression = monitorStart + currentButton.monitorValue + monitorEnd;
                state.monitorCursor += currentButton.monitorValue.length;

                if (currentButton.type === 'function') {
                    state.cursor--;
                    state.monitorCursor--;
                }
                state.buttonsHistory.push(currentButton);
                state.primaryMonitor = state.monitorExpression;
            }
        },
        equals(state, action) {
            const lastButton = getLastButton(state);
            const currentButton = getCurrentButton(action);
            if (isValidButton(lastButton, currentButton)) {
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
                        const currentButton = getCurrentButton(action);
                        state.buttonsHistory.push(currentButton);
                    }
                } catch (error) {
                    state.primaryMonitor = 'Error';
                    state.buttonsHistory = [];
                    state.expression = '';
                    state.cursor = 0;
                    state.monitorExpression = '';
                    state.monitorCursor = 0;
                }
            };
        },
        closeParenthesis(state, action) {
            const lastButton = getLastButton(state);
            const currentButton = getCurrentButton(action);
            if (isValidButton(lastButton, currentButton)) {
                if (state.expression.length !== state.cursor) {
                    state.cursor++;
                    state.monitorCursor++;
                    const currentButton = getCurrentButton(action);
                    state.buttonsHistory.push(currentButton);
                }
            }
        },
        CE(state, action) {
            let buttonsHistory = original(state.buttonsHistory);
            const lastButton = buttonsHistory[buttonsHistory.length - 1];
            state.buttonsHistory.pop();
            if (lastButton !== undefined) {
                if (lastButton.type === 'operand' || lastButton.type === 'operator' || lastButton.type === 'function') {
                    const start = state.expression.slice(0, state.expression.lastIndexOf(lastButton.value));
                    const end = state.expression.slice(state.expression.lastIndexOf(lastButton.value) + lastButton.value.length, state.expression.length);
                    state.expression = start + end;
                    state.cursor -= lastButton.value.length;

                    const monitorStart = state.monitorExpression.slice(0, state.monitorExpression.lastIndexOf(lastButton.monitorValue));
                    const monitorEnd = state.monitorExpression.slice(state.monitorExpression.lastIndexOf(lastButton.monitorValue) + lastButton.monitorValue.length, state.monitorExpression.length);
                    state.monitorExpression = monitorStart + monitorEnd;
                    state.monitorCursor -= lastButton.monitorValue.length;

                    if (lastButton.type === 'function') {
                        state.cursor++;
                        state.monitorCursor++;
                    }
                } else if (lastButton.id === 'equals') {
                    state.expression = '';
                    state.cursor = 0;
                    state.monitorExpression = '';
                    state.monitorCursor = 0;
                    state.buttonsHistory = [];
                } else if (lastButton.id === 'close-parenthesis') {
                    state.cursor--;
                    state.monitorCursor--;
                }
            }
            state.primaryMonitor = state.monitorExpression.length === 0 ? 0 : state.monitorExpression;
        }
    }
});

export const { addToExpression, equals, closeParenthesis, CE } = calculatorSlice.actions;

export const selectAns = state => state.calculator.ans;
export const selectExpression = state => state.calculator.expression;
export const selectCursor = state => state.calculator.cursor;
export const selectMonitorExpression = state => state.calculator.monitorExpression;
export const selectMonitorCursor = state => state.calculator.monitorCursor;
export const selectButtonsHistory = state => state.calculator.buttonsHistory;
export const selectPrimaryMonitor = state => state.calculator.primaryMonitor;

export default calculatorSlice.reducer;





function getCurrentButton(action) {
    let currentButton = {
        id: action.payload.id,
        type: action.payload.type,
        value: action.payload.value,
        label: action.payload.label,
        monitorValue: action.payload.monitorValue,
    };
    return currentButton;
}
function getLastButton(state) {
    let buttonsHistory = original(state.buttonsHistory);
    const lastButton = buttonsHistory[buttonsHistory.length - 1];
    return lastButton;
}

function isValidButton(lastButton, currentButton) {
    if (currentButton.id === 'close-parenthesis') {
        if (lastButton !== undefined) {
            if (lastButton.id === 'open-parenthesis' || lastButton.id === 'close-parenthesis' || lastButton.type === 'operator') {
                return false;
            }
        }
    } else if (currentButton.type === 'operator') {
        if (lastButton === undefined) {
            if (currentButton.id !== 'plus' && currentButton.id !== 'minus') {
                return false;
            }
        } else if (lastButton.type === 'function') {
            if (currentButton.id !== 'plus' && currentButton.id !== 'minus') {
                return false;
            }
        } else if (lastButton.id === 'point') {
            return false;
        }
    } else if (currentButton.id === 'equals') {
        if (lastButton !== undefined) {
            if (lastButton.type === 'function' || lastButton.type === 'operator') {
                return false;
            }
        }
    } else if (currentButton.id === 'percentage') {
        if (lastButton === undefined) {
            return false;
        } else if (lastButton.type === 'function' || lastButton.type === 'operator') {
            return false;
        } else if (lastButton.id === 'point') {
            return false;
        }
    } else if (currentButton.type === 'operand') {
        if (lastButton !== undefined) {
            if (lastButton.id === 'percentage') {
                return false;
            }
        }
    } else if (currentButton.type === 'function') {
        if (lastButton !== undefined) {
            if (lastButton.id === 'percentage') {
                return false;
            }
        }
    }
    return true;
}

function activateSmartAddition(state, action) {
    let buttonsHistory = original(state.buttonsHistory);
    let lastButton = getLastButton(state);
    let currentButton = getCurrentButton(action);

    if (buttonsHistory.length !== 0) {
        if (lastButton.id === 'equals' && !(currentButton.type === 'operator' || currentButton.id === 'percentage')) {
            state.expression = '';
            state.monitorExpression = '';
            state.cursor = 0;
            state.monitorCursor = 0;
            state.buttonsHistory = [];
        }
    }
    if (currentButton.id === 'ans') {
        currentButton.value = state.ans;
        currentButton.monitorValue = 'Ans';
    }
    if (lastButton !== undefined) {
        if (currentButton.type === 'operator' && lastButton.type === 'operator') {
            const start = state.expression.slice(0, state.expression.lastIndexOf(lastButton.value));
            const end = state.expression.slice(state.expression.lastIndexOf(lastButton.value) + lastButton.value.length, state.expression.length);
            state.expression = start + end;
            state.cursor -= lastButton.value.length;

            const monitorStart = state.monitorExpression.slice(0, state.monitorExpression.lastIndexOf(lastButton.monitorValue));
            const monitorEnd = state.monitorExpression.slice(state.monitorExpression.lastIndexOf(lastButton.monitorValue) + lastButton.monitorValue.length, state.monitorExpression.length);
            state.monitorExpression = monitorStart + monitorEnd;
            state.monitorCursor -= lastButton.monitorValue.length;
        }
    }
}
