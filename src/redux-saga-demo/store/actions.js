import * as types from './actions-types';
import { createAction } from 'redux-actions';
// export default {
//   increment() {
//     return { type: types.INCREMENT}
//   }
// }

// 创建 action
let increment = createAction(types.INCREMENT_ASYNC)

export default {
  increment
}