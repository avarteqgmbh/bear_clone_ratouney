import { combineReducers } from 'redux';
import NoteReducer from './../note/Reducers';

const NoteApp = combineReducers({
  NoteReducer,
});

export default NoteApp;