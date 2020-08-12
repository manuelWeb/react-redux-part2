import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';
import ActiveUserReducer from './reducer_activeUser';
import DevReducer from './reducer_dev';
import ActiveDev from './reducer_activeDev'

const rootReducer = combineReducers({
  users: UsersReducer,
  activeUser: ActiveUserReducer,
  dev: DevReducer,
  acitiveDev: ActiveDev,
});

export default rootReducer;
