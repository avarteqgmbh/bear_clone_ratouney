import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './Types';

const initialState = {
  token:     '',
  api_login: false,
};

const SessionReducer = function SessionReducer(state = initialState, action) {
  console.log('[SessionReducer:Action] - ', action);

  switch (action.type) {
    case LOGIN_FAILURE:
      return Object.assign(
        {},
        state,
        {
          api_login: false,
        },
      );
    case LOGIN_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          token:     action.token,
          api_login: false,
        },
      );
    case LOGIN_START:
      return Object.assign(
        {},
        state,
        {
          api_login: true,
        },
      );
    default:
      return state;
  }
};

export default SessionReducer;
