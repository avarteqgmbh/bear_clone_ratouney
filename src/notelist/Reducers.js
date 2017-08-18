import { SELECT_NOTE } from './Types';

const initialState = {
    notes: [
        {id: 1, title: "Dank Memes", body: "I love dank memes", category: "GENERAL", owner: "ratouney"},
        {id: 2, title: "Reddit", body: "Sometimes, i'm bored", category: "TRASH", owner: "ratouney"},
        {id: 3, title: "Overwatch", body: "The cancer that i love", category: "GENERAL", owner: "ratouney"},
        {id: 4, title: "Epitech", body: "Blinux is ugly", category: "TRASH", owner: "ratouney"},
        {id: 5, title: "Stuff", body: "Nothing here", category: "GENERAL", owner: "ratouney"},
        {id: 6, title: "New Note", body: "Nope", category: "TEMP", owner: "ratouney"},
    ],
    categories: ["GENERAL", "TRASH", "TEMP"],
    selected: -1,
};

const NoteListReducer = function NoteListReducer(state = initialState, action) {
    console.log('[NoteListReducer:Action] - ', action)

    switch(action.type) {
        case SELECT_NOTE:
            return { ...state, selected: action.id};

        default:
            return state;
    }
}

export default NoteListReducer;