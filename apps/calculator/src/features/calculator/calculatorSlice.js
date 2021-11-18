import { createSlice } from 'zarkit/@reduxjs/toolkit';
import { create, all } from 'mathjs';
const math = create(all);

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        ans: 0,
        expression: '',
        cursor: 0,
        monitorExpression: '',
        monitorCursor: 0,
        buttonsHistory: [],
        primaryMonitor: '',
    },
    reducers: {
        addToExpression(state, action) {
            let currentButton = {
                id: action.payload.id,
                type: action.payload.type,
                value: action.payload.value,
                label: action.payload.label,
                monitorValue: action.payload.monitorValue,
            };
            if (state.buttonsHistory.length !== 0) {
                if (state.buttonsHistory[state.buttonsHistory.length - 1].id === 'equals' && currentButton.type !== 'operator') {
                    state.expression = '';
                    state.monitorExpression = '';
                }
            }
            if (currentButton.id === 'ans') {
                currentButton.value = state.ans;
                currentButton.monitorValue = 'Ans';
            }

            if (isValidButton(state.buttonsHistory, currentButton)) {
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
            let result = Number(math.evaluate(state.expression).toFixed(11));
            if (!Number.isNaN(result)) {
                state.ans = result;
                state.monitorExpression = '' + state.ans;
                state.expression = '' + state.ans;
                state.primaryMonitor = state.monitorExpression;
                pushCurrentButton(state.buttonsHistory, action);
            }
        },
        closeParenthesis(state, action) {
            if (state.expression.length !== state.cursor) {
                state.cursor++;
                state.monitorCursor++;
                pushCurrentButton(state.buttonsHistory, action);
            }
        },
        CE(state, action) {
            const lastButton = state.buttonsHistory.pop();
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



function isValidButton(lastButton, currentButton) {
    return true;
}

function pushCurrentButton(buttonsHistory, action) {
    let currentButton = {
        id: action.payload.id,
        type: action.payload.type,
        value: action.payload.value,
        label: action.payload.label,
        monitorValue: action.payload.monitorValue,
    };
    buttonsHistory.push(currentButton)
}
