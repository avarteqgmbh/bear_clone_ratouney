import _ from 'lodash';
import {
    SELECT_NOTE,
    ADD_NOTE,
} from './Types';
import {
    UPDATE_TITLE,
    UPDATE_BODY,
    CHANGE_CATEGORY,
} from './../editor/Types';

const initialState = {
    notes: [
        { id: 1, title: 'Dank Memes', body: 'I love dank memes', category: 'GENERAL', owner: 'ratouney' },
        { id: 4, title: 'Epitech', body: 'Blinux is ugly', category: 'TRASH', owner: 'ratouney' },
        { id: 6, title: 'New Note', body: 'Nope', category: 'TEMP', owner: 'ratouney' },
        { id: 3, title: 'Overwatch', body: 'The cancer that i love', category: 'GENERAL', owner: 'ratouney' },
        { id: 5, title: 'Stuff', body: 'Nothing here', category: 'GENERAL', owner: 'ratouney' },
        { id: 2, title: 'Reddit', body: 'Sometimes, i\'m bored', category: 'TRASH', owner: 'ratouney' },
    ],
    categories: ['GENERAL', 'TRASH', 'TEMP'],
    selected:   -1,
};

const NoteListReducer = function NoteListReducer(state = initialState, action) {
    console.log('[NoteListReducer:Action] -', action);

    switch (action.type) {
        case ADD_NOTE:
            const ids = state.notes.map((elem) => elem.id);
            const new_highest = _.max(ids) + 1;
            const new_elem = { id: new_highest, title: '', body: '', category: action.category, owner: 'ratouney' };
            return Object.assign(
                {},
                state,
                {
                    notes: [...state.notes, new_elem],
                    selected: new_highest,
                });

        case SELECT_NOTE:
            return { ...state, selected: action.id };

        case UPDATE_TITLE:
            return Object.assign(
                {},
                state,
                {
                    notes: state.notes.map((note) =>
                        (note.id === Number(action.id)
                            ? { ...note, title: action.title }
                            : note
                        ))
                },
            );

        case UPDATE_BODY:
            return Object.assign(
                {},
                state,
                {
                    notes: state.notes.map((note) =>
                        (note.id === Number(action.id)
                            ? { ...note, body: action.body }
                            : note
                        ))
                },
            );

        case CHANGE_CATEGORY:
            return Object.assign(
                {},
                state,
                {
                    notes: state.notes.map((note) =>
                        (note.id === Number(action.id)
                            ? { ...note, category: action.category }
                            : note
                        ))
                },
            );

        default:
            return state;
    }
}

export default NoteListReducer;