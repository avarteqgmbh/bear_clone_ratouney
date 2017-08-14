import { combineReducers } from 'redux';
import NoteReducer from './../note/Reducers';
import SessionReducer from './../session/Reducers';

const NoteApp = combineReducers({
  NoteReducer,
  SessionReducer,
});

export default NoteApp;