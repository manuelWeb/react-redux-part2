import { USER_SELECTED } from "../actions";

// le state est relatif à ce reducer en question ici User
export default function (state = null, action) {
  // console.log(`state-user init: `, state);
  switch (action.type) {
    case USER_SELECTED: {
      // console.log(action);
      return action.payload
    }
    default: return state
  }

}