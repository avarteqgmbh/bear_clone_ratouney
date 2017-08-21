import {
    SELECT_NOTE,
    ADD_NOTE,
    HOVER_NOTE,
    UNHOVER_NOTE,
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

export const hoverNote = (id) => {
    return {
        type: HOVER_NOTE,
        id,
    };
};

export const unhoverNote = (id) => {
    return {
        type: UNHOVER_NOTE,
        id,
    };
};
