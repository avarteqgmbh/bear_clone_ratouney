import _ from 'lodash';
import {
  SELECT_NOTE,
  ADD_NOTE,
  TRASH_NOTE,
  RESTORE_NOTE,
  UPDATE_BODY_NOTE,
  UPDATE_TITLE_NOTE,
  ENTER_NOTE,
  EXIT_NOTE,
  GET_NOTES_START,
  GET_NOTES_FAILURE,
  GET_NOTES_SUCCESS,
  UPLOAD_NOTE_START,
  UPLOAD_NOTE_STOP,
} from './Types';
import API from './../api';
import MessageBox from './../layout/MessageBox';

export const uploadNote = (note) => {
  return (dispatch, getState) => {
    dispatch(uploadNoteStart());

    const stat = getState();
    const pos_in_arr = _.findIndex(stat.NoteReducer.notes, (tempnote) => tempnote.id === stat.NoteReducer.selectedNoteId)
    const curr = stat.NoteReducer.notes[pos_in_arr];
    const payload = {
      note: {
        id: curr.id,
        title: curr.title,
        body: curr.body,
      },
    };
    API.post('/notes/' + curr.id, payload)
    .then((response) => console.log('did not fail : ', response))
    .catch((errors) => console.log('Fuck', errors))


    dispatch(uploadNoteStop());
  }
};

export const uploadNoteStart = () => {
  return {
    type: UPLOAD_NOTE_START,
  };
};

export const uploadNoteStop = () => {
  return {
    type: UPLOAD_NOTE_STOP,
  };
};

export const getNotesStart = () => {
  return {
    type: GET_NOTES_START,
  };
};

export const getNotesFailure = (error) => {
  return {
    type: GET_NOTES_FAILURE,
    error,
  };
};

export const getNotesSuccess = (notes) => {
  MessageBox("Senpai, notice me", "Notes fetched from Server !", "sync", { color: 'green'});
  return {
    type: GET_NOTES_SUCCESS,
    notes,
  };
};

export const getNotes = () => {
  return (dispatch) => {
    console.log('Starting GetNotes');
    dispatch(getNotesStart());

    API.fetch('/notes')
      .then((response) => { return dispatch(getNotesSuccess(response)); })
      .catch((errors) => { return dispatch(getNotesFailure(errors)); });
  };
};

export const trashNote = (id) => {
  return {
    type: TRASH_NOTE,
    id,
  };
};

export const restoreNote = (id) => {
  return {
    type: RESTORE_NOTE,
    id,
  };
};

export const exitNote = (id) => {
  return {
    type: EXIT_NOTE,
    id,
  };
};

export const enterNote = (id) => {
  return {
    type: ENTER_NOTE,
    id,
  };
};

export const selectNote = (id) => {
  return {
    type: SELECT_NOTE,
    id,
  };
};

export const updateBodyNote = (id, body) => {
  return {
    type: UPDATE_BODY_NOTE,
    id,
    body,
  };
};

export const updateTitleNote = (id, title) => {
  return {
    type: UPDATE_TITLE_NOTE,
    id,
    title,
  };
};

export const addNote = () => {
  return {
    type: ADD_NOTE,
  };
};
