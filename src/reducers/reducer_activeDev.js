import { DEV_SELECTED } from "../actions";

export default function (state = null, action) {
  console.log(`state-dev init: `, state);
  switch (action.type) {
    case DEV_SELECTED:
      return action.payload
    default: return state
  }

}