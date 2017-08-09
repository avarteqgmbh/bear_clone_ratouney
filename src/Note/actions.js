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

export const trashNote = (id) => ({
  type: TRASH_NOTE,
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
