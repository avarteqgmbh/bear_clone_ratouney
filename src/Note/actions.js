/*
 *  In this part, we create the different action types the reducer will use
 *
 *
 */

import {
  SELECT_NOTE,
  ADD_NOTE,
  TRASH_NOTE,
  RESTORE_NOTE,
  UPDATE_BODY_NOTE,
  UPDATE_TITLE_NOTE,
  ENTER_NOTE,
  EXIT_NOTE,
  FETCHING_NOTES_START,
  FETCHING_NOTES_STOP,
  UPDATE_NOTES,
  POST_NOTE,
} from './Types.js';

export const postNote = (id, title, body, status) => ({
  type: POST_NOTE,
  id,
  title,
  body,
  status,
})

export const updateNotes = (notes) => ({
  type: UPDATE_NOTES,
  notes,
})

export const fetchNotesStart = () => ({
  type: FETCHING_NOTES_START,
})

export const fetchNotesStop = () => ({
  type: FETCHING_NOTES_STOP,
})

export const trashNote = (id) => ({
  type: TRASH_NOTE,
  id,
});

export const restoreNote = (id) => ({
  type: RESTORE_NOTE,
  id,
});

export const exitNote = (id) => ({
  type: EXIT_NOTE,
  id,
});

export const enterNote = (id) => ({
  type: ENTER_NOTE,
  id,
});

export const selectNote = (id) => ({
  type: SELECT_NOTE,
  id,
});

export const updateBodyNote = (id, body) => ({
  type: UPDATE_BODY_NOTE,
  id,
  body,
});

export const updateTitleNote = (id, title) => ({
  type: UPDATE_TITLE_NOTE,
  id,
  title,
});

export const addNote = () => ({
  type: ADD_NOTE,
});
