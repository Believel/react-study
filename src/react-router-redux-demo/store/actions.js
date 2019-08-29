import * as types from './actions-types';
import {createAction} from 'redux-actions';
let login = createAction(types.LOGIN_REQUEST)
let logout = createAction(types.LOGOUT_REQUEST)
export default {
  login,
  logout
}