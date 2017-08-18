import { combineReducers } from 'redux';
import NoteListReducer from './../notelist/Reducers';

const AppReducer = combineReducers({
    NoteListReducer,
});

export default AppReducer;