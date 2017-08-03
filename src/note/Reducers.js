import { SELECT_NOTE } from './Types.js';

const initalState = {
  notes: [
  {key: '1', title: "Hello", content: "HELLO THIS IS MY LIFE"},
  {key: '2', title: "World", content: "The world is great"},
  {key: '3', title: "Give", content: "Never gonna give you up"},
  {key: '4', title: "Let", content: "Never gonna let you down"},
  {key: '5', title: "Run", content: "Never gonna run around"},
  {key: '6', title: "Make", content: "Never gonna make you cry"},
  {key: '7', title: "Say", content: "Never gonna say goodbye"},
  {key: '8', title: "Tell", content: "Never gonna tell a lie"},
  {key: '9', title: "Hurt", content: "or hurt you..."},
],
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