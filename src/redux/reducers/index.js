import { combineReducers } from 'redux';
import { users } from './users.reducer';
import { userPassword } from './userPassword.reducer';
import { exercisesPlan, dietPlan } from './plan.reducer';
import { foods } from './foods.reducer';
import { stepCount, floor, distance } from './workout.reducer';
import { highblood, sugar, steps, distances, floors } from './measure.reducer';
import { email } from './email.reducer';

const rootReducer = combineReducers({
  users,
  userPassword,
  exercisesPlan,
  dietPlan,
  foods,
  stepCount,
  floor,
  distance,
  highblood,
  sugar,
  steps,
  floors,
  distances,
  email
});
export default rootReducer;
