import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppReducer from './reducers';

export const store = createStore(AppReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

export default store;
