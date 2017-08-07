/*
 *  In this part, we create the different action types the reducer will use
 *
 *
 */

import { SELECT_NOTE } from './Types.js';
import { ADD_NOTE } from './Types.js';
import { UPDATE_BODY_NOTE } from './Types.js';
import { UPDATE_TITLE_NOTE } from './Types.js';

export const selectNote = (note) => {
  return ({
    type: SELECT_NOTE,
    note
  });
}

export const updateBodyNote = (note, body) => {
  return ({
    type: UPDATE_BODY_NOTE,
    note: note,
    new_body: body
  });
}

export const updateTitleNote = (note, title) => {
  return ({
    type: UPDATE_TITLE_NOTE,
    note: note,
    new_title: title
  });
}
export const addNote = () => {
  return ({
    type: ADD_NOTE
  })
}