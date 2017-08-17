import fetch from 'isomorphic-fetch';

const host_api = process.env.REACT_APP_API_URL;

const headers = {
    'Content-Type': 'application/json',
}

const handleResponse = function handleResponse(payload) {
    console.log('HandleReponse : ', payload)
    return payload.json().then(
        (response) => {
            if (!payload.ok) {
                return Promise.reject(response);
            } // else
            return response;
        },
    ).catch((error) => { return error.error });
};

const API = {
    fetch: (url) => {
        const params = {
            method: 'GET',
            headers,
        };
        return fetch(host_api + url, params).then(handleResponse);
    },
    put: (url, content) => {
        const body = JSON.stringify(content)
        const params = {
            method: 'PUT',
            headers,
            body,
        };
        return fetch(host_api + url, params).then(handleResponse);
    },
    post: (url, content) => {
        const body = JSON.stringify(content)        
        const params = {
            method: 'POST',
            headers,
            body,
        }
        return fetch(host_api + url, params).then(handleResponse)
    },
}

export default API;
