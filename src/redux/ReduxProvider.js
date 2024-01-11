import App from '../App';
import {legacy_createStore} from 'redux';
import GlobalState from './reducers';
import { Provider } from 'react-redux';
import { PLAYERX, VALUES } from '../constants/constants';


export default function ReduxProvider() {
    return(<Provider store={legacy_createStore(GlobalState, {values: VALUES, turn: PLAYERX, moves: 0})}>
        <App />
    </Provider>)
}