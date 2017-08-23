import { combineReducers } from 'redux';
import NoteListReducer from './../notelist/Reducers';
import MessageBoxReducer from './../message_box/Reducers';

const AppReducer = combineReducers({
    NoteListReducer,
    MessageBoxReducer,
});

export default AppReducer;
