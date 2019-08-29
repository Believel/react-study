import { takeEvery, all, call, put, take } from 'redux-saga/effects';
import * as types from './store/actions-types';
export function* helloSaga() {
  console.log('hello')
}
const delay = (ms) => new Promise(function(resolve) {
  setTimeout(function() {
    resolve()
  }, ms)
})
export function* increment(dispatch) {
  // setTimeout(function() {
  //   dispatch({ type: types.INCREMENT})
  // }, 1000)

  // yield delay(1000)

  // 我命令saga中间件立刻调用delay方法，并且传入1000这个参数
  yield call(delay, 1000)
  // put相当于 dispatch/action
  // yield put({type: types.INCREMENT })
  dispatch({type: types.INCREMENT})
}
// 监听计数器加1
export function* watchIncrement(dispatch) {
  // 用来监听特定的动作
  yield takeEvery(types.INCREMENT_ASYNC, increment, dispatch)
}
// 限制监听加1的次数
export function* watchIncrement2(dispatch) {
  for(let i = 0; i < 3; i++) {
    // take监听指定的动作，只不过他只监听一次
    yield take(types.INCREMENT_ASYNC)
    yield increment(dispatch)
  }
}
export function* log(dispatch, getState, action) {
  console.log('老状态', getState())
  console.log(action)
  console.log('新状态', getState())
}
// 日志计数器
export function* watchAndLog(dispatch, getState) {
  // 监听任意的动作，执行log方法
  yield takeEvery('*', log, dispatch, getState)
}
export function* rootSaga({ dispatch, getState}) {
  // all 表示并行执行
  yield all([watchIncrement2(dispatch), watchAndLog(dispatch, getState)])
}