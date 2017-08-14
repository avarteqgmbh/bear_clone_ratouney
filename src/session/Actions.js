import {
    LOGIN_REQUEST_START,
    LOGIN_REQUEST_STOP,
    REGISTER_TOKEN,
} from './Types';

export const loginRequestStart = () => ({
    type: LOGIN_REQUEST_START
})

export const loginRequestStop = () => ({
    type: LOGIN_REQUEST_STOP
})

export const registerToken = (username, token) => ({
    type: REGISTER_TOKEN,
    username,
    token,
})