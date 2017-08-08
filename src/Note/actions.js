/*
 *  In this part, we create the different action types the reducer will use
 *
 *
 */

import { 
  SELECT_NOTE,
  ADD_NOTE,
  TRASH_NOTE,
  UPDATE_BODY_NOTE,
  UPDATE_TITLE_NOTE,
  ENTER_NOTE,
  EXIT_NOTE,
 } from './Types.js';

export const trashNote = (id) => {
  return ({
    type: TRASH_NOTE,
    id
  })
}

export const exitNote = (id) => {
  return ({
    type: EXIT_NOTE,
    id
  });
}

export const enterNote = (id) => {
  return ({
    type: ENTER_NOTE,
    id
  });
}

export const selectNote = (id) => {
  return ({
    type: SELECT_NOTE,
    id
  });
}

export const updateBodyNote = (id, body) => {
  return ({
    type: UPDATE_BODY_NOTE,
    id,
    body,
  });
}

export const updateTitleNote = (id, title) => {
  return ({
    type: UPDATE_TITLE_NOTE,
    id,
    title,
  });
}

export const addNote = () => {
  return ({
    type: ADD_NOTE
  })
}