// 创建 todos 的 actions 函数
export default {
  addTodo: (todo) => {
    return { type: 'ADD_TODO', ...todo}
  },
  delTodo: (index) => {
    return{ type: 'DEL_TODO', index}
  },
  toggleTodo: (index) => {
    return { type: 'TOGGLE_TODO', index}
  },
  switchType: (toggleType) => {
    return { type: 'SWITCH_TYPE', toggleType}
  }
}