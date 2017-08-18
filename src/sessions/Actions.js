import {
    LOGIN_START,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
} from './Types';
import API from './../api';
import MessageBox from './../layout/MessageBox';
import { getNotes } from './../note/Actions';

export const loginFail = (error) => {
    MessageBox('Senpai, notice me', 'Login Failed', 'cross', { color: 'red' });
    return {
        type: LOGIN_FAILURE,
        error,
    };
};

export const loginSuccess = (token) => {
    return (dispatch) => {
        MessageBox('Senpai, notice me', 'Login Successfull', 'check', { color: 'green' });
        dispatch({ type: LOGIN_SUCCESS, token });
        dispatch(getNotes());
    };
};

const offlineHandler = function offlineHandler(error, dispatch) {
    MessageBox('Senpai, notice me', 'Server not responding, possibly offline', 'cross', { color: 'red' });
    dispatch({ type: LOGIN_FAILURE, error})
}

const loginHandler = function loginHandler(response, dispatch) {
    if (response.meta !== undefined) {
        dispatch(loginSuccess(response.meta.token));
    } else {
        dispatch(loginFail(response));
    }
};

export const loginRequest = (username, password) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_START });

        const payload = { username, password };
        API.post('/sessions', payload)
            .then((response) => loginHandler(response, dispatch))
            .catch((error) => offlineHandler(error, dispatch));
    };
};
