import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {guessGameReducer} from './reducers';

export default createStore(guessGameReducer, devToolsEnhancer());
