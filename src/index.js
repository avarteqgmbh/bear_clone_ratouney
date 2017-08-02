import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import { StoreHandler } from './note/Reducers';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

let store = createStore( StoreHandler);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
