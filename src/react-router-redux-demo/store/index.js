import {createStore, applyMiddleware, compose  } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers';
import { rootSaga } from './sagas';

export const history = createBrowserHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the store
export const store = createStore(createRootReducer(history), composeEnhancers(applyMiddleware(routerMiddleware(history),sagaMiddleware)))
// then run the saga
sagaMiddleware.run(rootSaga, store)