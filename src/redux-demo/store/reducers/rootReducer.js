import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { todoReducer } from './todos';

// 设置主题
const themeReducer = (state, action) => {
  if(!state) 
    return { themeColor: 'red'}
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}


// 合并reducer之后返回一个新的函数
export const rootReducers =  combineReducers({
  themeReducer,
  counter: counterReducer,
  todoReducer
})
