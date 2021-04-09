import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// step  one for redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './reducers/userReducer'

  if(localStorage.getItem('token')===null) /*to empty the current state of data in localstorage */
    localStorage.setItem('token', JSON.stringify([]))
  let initialState = {
    currentIndex: -1,
    list : JSON.parse(localStorage.getItem('token'))
  }

  // creating store for redux
  var store = createStore(userReducer, initialState)
ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>    
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
