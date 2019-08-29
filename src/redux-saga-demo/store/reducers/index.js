import * as types from '../actions-types';

export default (state = { number: 0}, action) => {
  switch(action.type) {
    case types.INCREMENT:
      return { number: state.number + 1}
    default:
      return state
  }
}