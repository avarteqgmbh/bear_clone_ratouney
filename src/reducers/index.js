import { combineReducers } from 'redux';
import NoteReducer from './../note/Reducers';
import SessionReducer from './../sessions/Reducers';

const NoteApp = combineReducers({
  NoteReducer,
  SessionReducer,
});

export default NoteApp;
