import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Router from './router/router';
// import AppRouter from './router-demo';
// import { Provider } from 'react-redux';

// redux-demo
// import { store } from './redux-demo/store/createStore';
// import App from './redux-demo/pages';

// 引入redux-saga-demo中的Counter
// import Counter from './redux-saga-demo/components/Counter';
// import {store} from './redux-saga-demo/store';

// react-router-redux-demo
// import { store, history} from './react-router-redux-demo/store';
// import Login from './react-router-redux-demo/components/Login';
// import Logout from './react-router-redux-demo/components/Logout';
// import {Route, Switch, Redirect} from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router'


// react-hooks
import App from './react-hooks/pages';

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>

  // <Provider store={store}>
  //   <Counter/>
  // </Provider>
  // <Provider store={store}>
  //   <ConnectedRouter history={history}>
  //     <Switch>
  //       <Route path="/login" component={Login}></Route>
  //       <Route path="/logout" component={Logout}></Route>
  //       <Redirect to="/login"/>
  //     </Switch>
  //   </ConnectedRouter>
  // </Provider>

  <App/>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
