import * as types from '../actions-types';
import { store } from '../createStore';
import {bindActionCreators} from 'redux';
let dispatch = store.dispatch

const actions = {
  incrementCounter: () => {
    dispatch({type: 'INCREMENT', payload: 1})
  },
  decrementCounter: () => {
    dispatch({type: 'DECREMENT', payload: 1})
  },
  thunkIncrement() {
    return (dispatch, getState) => {
      setTimeout(function() {
        dispatch({ type: types.THUNKINCREMENT, payload: 1})
      }, 1000)
    }
  },
  promiseIncrement() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve({type: types.THUNKINCREMENT, payload: 1})
      }, 1000)
    }) 
  },
  payloadIncrement() {
    return {
      type: types.THUNKINCREMENT,
      payload: new Promise(function(resolve, reject) {
        setTimeout(function() {
          if(Math.random() > .5) {
            resolve(100)
          } else {
            reject(-100)
          }
        }, 1000)
      }) 
    }
  }
}
export default bindActionCreators(actions, dispatch)