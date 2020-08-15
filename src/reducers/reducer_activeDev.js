import { DEV_SELECTED } from "../actions";

// le state est relatif à ce reducer en question ici dev
export default function (state = null, action) {
  // console.log(`state-user init: `, state);
  switch (action.type) {
    case DEV_SELECTED: {
      // console.log(action);
      return action.payload
    }
    default: return state
  }

}