import * as types from '../actions-types';
// 设置数字
export const counterReducer = (state, action) => {
  if(!state) return { number: 0}
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, number: state.number + 1}
    case types.DECREMENT:
      return { ...state, number: state.number - 1}
    default: 
      return state
  }
}