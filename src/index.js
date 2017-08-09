import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
// import { applyMiddleware, createStore } from 'redux';
// import logger from 'redux-logger';
import NoteApp from './reducers';

// let store = createStore(NoteApp, applyMiddleware(logger));
const store = createStore(NoteApp);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
