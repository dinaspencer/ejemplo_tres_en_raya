import { PLAYERX, VALUES } from '../constants/constants';


export default function valuesReducer(state= VALUES, action) {
    switch(action.type) {
        case "PLAY_POSITION":
            let valuesCopy = JSON.parse(JSON.stringify(state));
            let newMovement = action.payload.turn === PLAYERX ? 'X' : '0';
            valuesCopy[action.payload.rowNumber][action.payload.columnNumber] = newMovement;
            return valuesCopy;
        case "RESET":
            return VALUES;
        default:
            return state;
    }
}