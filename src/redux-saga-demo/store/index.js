import {createStore, applyMiddleware, compose  } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import reducers from './reducers';
import { rootSaga } from '../sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the store
export const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))
// then run the saga
sagaMiddleware.run(rootSaga, store)
window.store = store
