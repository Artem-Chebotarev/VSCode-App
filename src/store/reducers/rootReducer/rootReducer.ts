import {combineReducers} from 'redux';
import {darkModeReducer} from '../darkModeReducer/darkModeReducer';

export const rootReducer = combineReducers({
  darkMode: darkModeReducer,
});
