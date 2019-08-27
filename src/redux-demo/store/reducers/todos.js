import * as types from '../actions-types';
// 设置数字
export const todoReducer = (state = { items: []}, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state.items, { text: action.text, completed: false }]
    case types.DEL_TODO:
      return [...state.items.splice(action.index, 1)]
    case types.TOGGLE_TODO:
      return state.items.map((item, index) => {
        if(index === action.index) {
          item.completed = !item.completed
        }
        return item
      })
    default: 
      return state
  }
}