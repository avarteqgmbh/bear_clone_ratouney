import {
    SYNC_NOTE_START,
    SYNC_NOTE_SUCCESS,
    SYNC_NOTE_FAILURE,
} from './Types';
import API from './../api';

export const syncNotesSuccess = (notes) => {
    return {
        type: SYNC_NOTE_SUCCESS,
        notes,
    };
};

export const syncNotesFailure = (error) => {
    return {
        type: SYNC_NOTE_FAILURE,
        error,
    };
};

export const syncNotesStart = () => {
    return {
        type: SYNC_NOTE_START,
    };
};

export const eslintisapain = 'stahp';

export const syncNotes = () => {
    return (dispatch) => {
        dispatch(syncNotesStart());
        API.get('/notes').then(
            (stuff) => { dispatch(syncNotesSuccess(stuff.data)); },
            (error) => { dispatch(syncNotesFailure(error)); },
        );
    };
};
