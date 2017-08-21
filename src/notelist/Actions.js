import { 
    SELECT_NOTE,
    ADD_NOTE,
 } from './Types';

export const selectNote = function selectNote(id) {
    return ({
        type: SELECT_NOTE,
        id
    })
}

export const addNote = (category) => {
    return {
        type: ADD_NOTE,
        category,
    };
};