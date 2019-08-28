import * as types from '../actions-types';
// 设置数字
export const todoReducer = (state = { items: [], toggleType: "all"}, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {...state, items: [...state.items, { text: action.text, completed: false }]}
    case types.DEL_TODO:
      return {...state, items: [...state.items.slice(0, action.index), ...state.items.slice(action.index+1)]}
    case types.TOGGLE_TODO:
      return {...state, items: state.items.map((item, index) => {
        if(index === action.index) {
          item.completed = !item.completed
        }
        return item
      })}
    case types.SWITCH_TYPE:
      return {...state, toggleType: action.toggleType}
    default: 
      return state
  }
}