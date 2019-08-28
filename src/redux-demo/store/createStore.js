import { createStore, applyMiddleware } from 'redux';
import { rootReducers } from './reducers/rootReducer';

// export const store =  createStore(rootReducers)

// 中间件
// 希望可以实现添加多个中间件

// let dispatch = store.dispatch
// // 重写 dispatch
// store.dispatch = function(action) {
//   console.log('老的状态：'+ JSON.stringify(store.getState()))
//   dispatch(action)
//   console.log('新的状态：'+ JSON.stringify(store.getState()))
// }


let logger1 = function({dispatch, getState}) {
  return function(next) {
    return function(action) {
      console.log('老状态1：' + getState().counter.number)
      next(action)
      console.log('新状态1：' + getState().counter.number)
    }
  }
}
let logger2 = function({dispatch, getState}) {
  return function(next) {
    return function(action) {
      console.log('老状态2：' + getState().counter.number)
      next(action)
      console.log('新状态2：' + getState().counter.number)
    }
  }
}
// let applyMiddleware = function(...middlewares) {
//   return function(createStore) {
//     return function(reducer) {
//       let store = createStore(reducer)
//       let dispatch;
//       let middlewareAPI = {
//         getState: store.getState,
//         dispatch: action => dispatch(action)
//       }
//       middlewares = middlewares.map(middleware => middleware(middlewareAPI))
//       dispatch = compose(...middlewares)(store.dispatch)
//       return { ... store, dispatch }
//     }
//   }
// }

// 处理actions是函数的中间件
let thunk = ({dispatch, getState}) => next => action => {
  if (typeof action === 'function') {
    action(dispatch, getState)
  } else {
    next(action)
  }
}
// 处理actions是promise的中间件
let promise = ({dispatch, getState}) => next => action => {
  if(action && action.then) {
    action.then(dispatch)
  } else if(action && action.payload && action.payload.then) {
    action.payload.then(payload => dispatch({...action, payload}), payload => dispatch({...action, payload}))
  
  } else {
    if(action) {
      next(action)
    }
    
  }
}
// export const store = applyMiddleware(promise, thunk, logger2)(createStore)(rootReducers)

export const store = createStore(rootReducers, applyMiddleware(promise, thunk, logger1))

// compose(add3, add2, add1)
// 从右向左开始计算，把每次的计算结果传递给下一个参数中，依次类推
// function compose(...fns) {
//   return function(...args) {
//     let last = fns.pop();
//     return fns.reduceRight((val, fn) => {
//       return fn(val)
//     }, last(...args))
//   }
// }

// function compose(...fns) {
//   if(fns.length === 1) return fns[0];
//   return fns.reduce((a, b) => {
//     return (...args) => a(b(...args))
//   })
// }
// function add1(str) {
//   return str
// }
// function add2(str) {
//   return str + 1
// }
// function add3(str) {
//   return str + 2
// }
// console.log(compose(add3, add2, add1)('aaaa'))