import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';
import DevReducer from './reducer_dev';
import ActiveDevReducer from './reducer_activeDev'
import ActiveUserReducer from './reducer_activeUser';

const rootReducer = combineReducers({
  users: UsersReducer,
  activeUser: ActiveUserReducer,
  dev: DevReducer,
  activeDev: ActiveDevReducer,
});

export default rootReducer;
