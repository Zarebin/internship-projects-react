import { useDispatch } from 'zarkit/react-redux';
import { solveExpression } from './calculatorSlice';
import buttonsDataList from './buttonsDataList';

// A custom hook returns a function that gets an event and handles any valid keyboard event
export default function useKeyboard() {

    const dispatch = useDispatch();

    return function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            dispatch(solveExpression({ id: "equals", label: "=" }));
        } else {
            const buttons = buttonsDataList.filter(button => button.keyboardEventKey === e.key);
            if (buttons.length > 0) {
                const button = buttons[0];
                dispatch(button.createAction());
            }
        }
    }
}
