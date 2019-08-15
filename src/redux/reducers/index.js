import { combineReducers } from 'redux';
import { users } from './users.reducer';
import { userPassword } from './userPassword.reducer';
import { exercisesPlan, dietPlan } from './plan.reducer';
import { foods } from './foods.reducer';
import { stepCount, floor, distance } from './workout.reducer';
import { highblood } from './measure.reducer';

const rootReducer = combineReducers({
  users,
  userPassword,
  exercisesPlan,
  dietPlan,
  foods,
  stepCount,
  floor,
  distance,
  highblood
});
export default rootReducer;
