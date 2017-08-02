/*
 *  In this part, we create the different action types the reducer will use
 *
 *
 */

import { SELECT_NOTE } from './Types.js';

export const selectNote = (note) => {
  return ({
    type: SELECT_NOTE,
    note
  });
}