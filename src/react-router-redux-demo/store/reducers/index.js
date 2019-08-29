import * as types from '../actions-types';
import {handleActions} from 'redux-actions';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

 export const user = handleActions({
  [types.LOGIN_SUCCESS]: (state, action) => {
    return {...state, token: action.token}
  },
  [types.LOGIN_FAILURE]: (state, action) => ({...state, error: action.error}),
}, {
  error: '',
  token: ''
});
const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user
})
export default createRootReducer