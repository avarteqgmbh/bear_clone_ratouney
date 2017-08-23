import _ from 'lodash';
import {
  SELECT_NOTE,
  ADD_NOTE,
  HOVER_NOTE,
  UNHOVER_NOTE,
} from './Types';
import {
  UPDATE_TITLE,
  UPDATE_BODY,
  CHANGE_CATEGORY,
} from './../editor/Types';
import {
  SYNC_NOTE_START,
  SYNC_NOTE_SUCCESS,
  SYNC_NOTE_FAILURE,
} from './../topmenu/Types';

const initialState = {
  notes:        [],
  categories:   ['GENERAL', 'TRASH', 'TEMP'],
  selected:     -1,
  hover:        -1,
  hovering:     false,
  api_fetching: false,
};

const convertNote = function convertNote(note) {
  return { id: note.id, title: note.title, body: note.body, category: note.status, owner: 'ratouney' };
};

const NoteListReducer = function NoteListReducer(state = initialState, action) {
  console.log('[NoteListReducer:Action] -', action);

  switch (action.type) {
    case SYNC_NOTE_SUCCESS:
      const newnotes = action.notes.map((elem) => { return convertNote(elem); });
      return Object.assign(
        {},
        state,
        {
          notes:        newnotes,
          api_fetching: false,
        },
      );

    case SYNC_NOTE_START:
      return Object.assign(
        {},
        state,
        {
          api_fetching: true,
        },
      );

    case SYNC_NOTE_FAILURE:
      return Object.assign(
        {},
        state,
        {
          api_fetching: false,
        },
      );

    case HOVER_NOTE:
      return Object.assign(
        {},
        state,
        {
          hover: action.id,
          hovering: true,
        },
      );

    case UNHOVER_NOTE:
      return Object.assign(
        {},
        state,
        {
          hovering: false,
        },
      );

    case ADD_NOTE:
      const ids = state.notes.map((elem) => elem.id);
      const new_highest = _.max(ids) + 1;
      const new_elem = { id: new_highest, title: '', body: '', category: action.category, owner: 'ratouney' };
      return Object.assign(
        {},
        state,
        {
          notes: [...state.notes, new_elem],
          selected: new_highest,
        });

    case SELECT_NOTE:
      return { ...state, selected: action.id };

    case UPDATE_TITLE:
      return Object.assign(
        {},
        state,
        {
          notes: state.notes.map((note) =>
            (note.id === Number(action.id)
              ? { ...note, title: action.title }
              : note
            ))
        },
      );

    case UPDATE_BODY:
      return Object.assign(
        {},
        state,
        {
          notes: state.notes.map((note) =>
            (note.id === Number(action.id)
              ? { ...note, body: action.body }
              : note
            ))
        },
      );

    case CHANGE_CATEGORY:
      return Object.assign(
        {},
        state,
        {
          notes: state.notes.map((note) =>
            (note.id === Number(action.id)
              ? { ...note, category: action.category }
              : note
            ))
        },
      );

    default:
      return state;
  }
}

export default NoteListReducer;