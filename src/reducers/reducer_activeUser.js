import { USER_SELECTED } from "../actions";

export default function (state = null, action) {
  console.log(`state init: `, state);
  switch (action.type) {
    case USER_SELECTED:
      return action.payload
    default: return state
  }

}