import {
    SELECT_NOTE,
    ADD_NOTE,
    REMOTE_ADD_NOTE_FAILURE,
    REMOTE_ADD_NOTE_SUCCESS,
    HOVER_NOTE,
    UNHOVER_NOTE,
} from './Types';
import API from './../api';

export const remoteAdDNoteSuccess = (note) => {
    return {
        type: REMOTE_ADD_NOTE_SUCCESS,
        note,
    };
};

export const remoteAddNoteFailure = (error) => {
    return {
        type: REMOTE_ADD_NOTE_FAILURE,
        error,
    };
};

export const remoteAddNote = (owner, category) => {
    return () => {
        console.log('Add a note on remote server with  : ', category);
        const payload = { note: { title: 'Sample Title', body: 'Yes, sample body, not a joke' } };
        console.log('Payload : ', payload);
        API.post('/notes', payload);
    };
};

export const selectNote = function selectNote(id) {
    return ({
        type: SELECT_NOTE,
        id,
    });
};

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
