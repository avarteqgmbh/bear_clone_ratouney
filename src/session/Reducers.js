import {
    LOGIN_REQUEST_START,
    LOGIN_REQUEST_STOP,
    REGISTER_TOKEN,
} from './Types';

const initialState = {
    loggingIn: false,
    username: '',
    token: '',
};

const SessionReducer = function SessionReducer(state = initialState, action) {
    console.log('[SessionReducer:Action] - ', action)

    switch(action.type) {
        case LOGIN_REQUEST_START:
            return Object.assign(
                {},
                state,
                { ...state, loggingIn: true }
            )

        case LOGIN_REQUEST_STOP:
            return Object.assign(
                {},
                state,
                { ...state, loggingIn: false }
            )
        
        case REGISTER_TOKEN:
            return Object.assign(
                {},
                state,
                { ...state, token: action.token, username: action.username}
            )

        default:
            return state;
    }
}

export default SessionReducer;