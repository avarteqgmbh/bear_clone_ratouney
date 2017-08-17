import _ from 'lodash';
import {
  SELECT_NOTE,
  ENTER_NOTE,
  EXIT_NOTE,
  ADD_NOTE,
  TRASH_NOTE,
  RESTORE_NOTE,
  UPDATE_BODY_NOTE,
  UPDATE_TITLE_NOTE,
  GET_NOTES_FAILURE,
  GET_NOTES_SUCCESS,
  GET_NOTES_START,
  UPLOAD_NOTE,
  UPLOAD_NOTE_START,
  UPLOAD_NOTE_STOP,
} from './Types';

const initalState = {
  notes:          [],
  selectedNoteId: -1,
  overNoteId:     -1,
  api_fetching:   false,
  api_uploading:  false,
};

const initalNote = function initalNote(id) {
  return {
    id,
    title:  '',
    body:   '',
    status: 'GENERAL',
  };
};

const NoteReducer = function NoteReducer(state = initalState, action) {
  console.log("[NoteReducer:Action] - ", action)
  const lastId = (list) => ((_.last(list)).id);
  console.log('[NoteReducer:Action] - ', action);

  switch (action.type) {
    case UPLOAD_NOTE_START:
      return Object.assign(
        {},
        state,
        {
          api_uploading: true,
        },
      );

    case UPLOAD_NOTE_STOP:
      return Object.assign(
        {},
        state,
        {
          api_uploading: false,
        },
      );

    case UPLOAD_NOTE:
      console.log('Upload Note : ', action.note);
      console.log('Means this one : ', state.notes[action.note]);
      return state;

    case GET_NOTES_FAILURE:
      console.log('You fucked up : ', action.error);
      return Object.assign(
        {},
        state,
        {
          api_fetching: false,
        },
      );

    case GET_NOTES_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          notes:        action.notes.data,
          api_fetching: false,
        },
      );

    case GET_NOTES_START:
      return Object.assign(
        {},
        state,
        {
          api_fetching: true,
        },
      );

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

    case RESTORE_NOTE:
      return Object.assign(
        {},
        state,
        {
          notes: state.notes.map((note) =>
            (note.id === action.id
              ? { ...note, status: 'GENERAL' }
              : note),
          ),
          selectedNoteId: -1,
          overNoteId:     -1,
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
          {
            overNoteId: -1,
          },
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
              ? { ...note, body: action.body }
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
          notes:          [...state.notes, newNote],
          selectedNoteId: newNote.id,
        });

    default:
      return state;
  }
};

export default NoteReducer;
