import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Router from './router/router';
// import AppRouter from './router-demo';
import { Provider } from 'react-redux';

// redux-demo
// import { store } from './redux-demo/store/createStore';
// import App from './redux-demo/pages';

// 引入redux-saga-demo中的Counter
import Counter from './redux-saga-demo/components/Counter';
import {store} from './redux-saga-demo/store';
ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>

  <Provider store={store}>
    <Counter/>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
