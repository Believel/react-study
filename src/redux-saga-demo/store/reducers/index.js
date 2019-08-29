import * as types from '../actions-types';
import { handleActions } from 'redux-actions';

// export default (state = { number: 0}, action) => {
//   switch(action.type) {
//     case types.INCREMENT:
//       return { number: state.number + 1}
//     default:
//       return state
//   }
// }

export default handleActions({
  [types.INCREMENT]: (state, action) => ({...state, number: state.number + 1})
}, {
  number: 0
})