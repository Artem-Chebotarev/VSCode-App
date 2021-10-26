import {combineReducers} from 'redux';
import {darkModeReducer} from '../darkModeReducer/darkModeReducer';
import {filesReducer} from '../filesReducer/filesReducer';

export const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  files: filesReducer,
});
