import {take, call, put } from 'redux-saga/effects';
import * as types from './actions-types';
import { push } from 'connected-react-router'
// 模拟api
let Api = {
  login(username, password){
    return new Promise(function(resolve) {
      resolve(username + password)
    })
  },
  logout() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve()
      }, 1)
    })
  }
}
function* login(username, password) {
  try {
    // call 命令调用Api.login 并把username,password传参进去
    let token = yield call(Api.login, username, password)

    // put方法相当于dispatch或者action
    yield put({type: types.LOGIN_SUCCESS, token})

    // 在redux中跳转路由，返回的是一个action
    yield put(push('/logout'))

    return token
  } catch (error) {
    yield put({type: types.LOGIN_FAILURE, error})
  }
}
function* logout() {
  try {
    yield call(Api.logout)
    yield put({type: types.LOGOUT_SUCCESS})
    yield put(push('/login'))
  } catch (error) {
    yield put({type: types.LOGOUT_FAILURE})
  }
}
function* loginFlow() {
  while(true) {
    // take监听指定的动作，只不过他只监听一次
    let { payload } = yield take(types.LOGIN_REQUEST);
    let token = yield login(payload.username, payload.password);
    if(token) {
      yield take(types.LOGOUT_REQUEST)
      yield call(logout)
    }
  }
}
export function* rootSaga() {
  yield loginFlow()
}