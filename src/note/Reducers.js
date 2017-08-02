import { SELECT_NOTE } from './Types.js';

const initalState = {
  notes: [],
  note: '-1',
}

export function StoreHandler(state = initalState, action) {
  switch(action.type) {
    case SELECT_NOTE:
      return Object.assign(
        {},
        state,
        { note: action.note })

    default:
      return state
  }
}