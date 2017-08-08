import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import NoteApp from './reducers';

//let store = createStore(NoteApp, applyMiddleware(logger));
let store = createStore(NoteApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
