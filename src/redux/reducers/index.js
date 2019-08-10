import { combineReducers } from 'redux';
import { users } from './users.reducer';
import { userPassword } from './userPassword.reducer';
import { exercisesPlan, dietPlan } from './plan.reducer';

const rootReducer = combineReducers({
  users,
  userPassword,
  exercisesPlan,
  dietPlan
});
export default rootReducer;
