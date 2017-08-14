import { store } from './../index.js';
import MessageBox from './../layout/MessageBox';
import { loginRequestStart, loginRequestStop, registerToken } from './Actions';

const HandleLogin = function HandleLogin(data) {
    store.dispatch(loginRequestStop())
    if (data.meta !== undefined) {
        store.dispatch(registerToken(data.data.username, data.meta.token))
        MessageBox("Senpai, notice me", data.data.username + " has been logged in", "check", { color: 'green' })
    } else {
        MessageBox("Senpai, notice me", "Error : " + data.error, "cross", { color: 'red' })
    }
}

const HandleAnswer = function HandleAnswer(data) {
    data.json()
        .then(
        parsed => HandleLogin(parsed),
        error => console.log('Failed Json conversion of : ', data)
        )
}

const LoginUser = function LoginUser(data) {
    store.dispatch(loginRequestStart())
    let adress = process.env.REACT_APP_API_URL + '/sessions'
    let headers = { 'Content-Type': 'application/json' }
    let body = JSON.stringify({ username: data.userName, password: data.password })
    const params = {
        method: 'POST',
        headers,
        body
    }
    fetch(adress, params)
        .then(
        response => HandleAnswer(response),
        error => console.log('FAK : ', error)
        )
}

export default LoginUser;
