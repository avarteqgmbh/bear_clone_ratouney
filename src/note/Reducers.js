import {
  SELECT_NOTE,
  ENTER_NOTE,
  EXIT_NOTE,
  ADD_NOTE,
  TRASH_NOTE,
  UPDATE_BODY_NOTE,
  UPDATE_TITLE_NOTE,
} from './Types.js';
import _ from 'lodash';

const initalState = {
  notes: [
    { id: 1, title: 'World', content: 'The world is great', status: 'GENERAL' },
    { id: 2, title: 'Hello', content: 'HELLO THIS IS MY LIFE', status: 'GENERAL' },
    { id: 3, title: 'Give', content: 'Never gonna give you up', status: 'GENERAL' },
    { id: 4, title: 'Let', content: 'Never gonna let you down', status: 'TRASH' },
    { id: 5, title: 'Run', content: 'Never gonna run around', status: 'GENERAL' },
    { id: 6, title: 'Make', content: 'Never gonna make you cry', status: 'GENERAL' },
    { id: 7, title: 'Say', content: 'Never gonna say goodbye', status: 'TRASH' },
    { id: 8, title: 'Tell', content: 'Never gonna tell a lie', status: 'GENERAL' },
    { id: 9, title: 'Hurt', content: 'or hurt you...', status: 'TRASH' },
  ],
  selectedNoteId: -1,
  overNoteId: -1,
};

const initalNote = function initalNote(id) {
  return {
    id,
    title: '',
    content: '',
    status: 'GENERAL',
  };
};

const NoteReducer = function NoteReducer(state = initalState, action) {
  const lastId = (list) => ((_.last(list)).id);

  switch (action.type) {
    case TRASH_NOTE:
      return Object.assign(
        {},
        state,
        {
          notes: state.notes.map((note) =>
            (note.id === action.id
              ? { ...note, status: 'TRASH' }
              : note),
          ),
          selectedNoteId: -1,
        },
      );

    case ENTER_NOTE:
      return Object.assign(
        {},
        state,
        { ...state, overNoteId: action.id },
      );

    case EXIT_NOTE:
      if (state.selectedNoteId === action.id) {
        return Object.assign(
          {},
          state,
          { ...state, overNoteId: -1 },
        );
      }
      return state;


    case SELECT_NOTE:
      return Object.assign(
        {},
        state,
        { selectedNoteId: action.id });

    case UPDATE_BODY_NOTE:
      return Object.assign(
        {},
        state,
        {
          notes: state.notes.map((note) =>
            (note.id === action.id
              ? { ...note, content: action.body }
              : note),
          ),
          selectedNoteId: action.id,
        },
      );

    case UPDATE_TITLE_NOTE:
      return Object.assign(
        {},
        state,
        {
          notes: state.notes.map((note) =>
            (note.id === action.id
              ? { ...note, title: action.title }
              : note),
          ),
          selectedNoteId: action.id,
        },
      );

    case ADD_NOTE:
      const newNote = initalNote(lastId(state.notes) + 1);

      return Object.assign(
        {},
        state,
        {
          notes: [...state.notes, newNote],
          selectedNoteId: newNote.id,
        });

    default:
      return state;
  }
};

export default NoteReducer;
