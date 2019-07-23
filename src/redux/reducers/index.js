import { combineReducers } from 'redux';
import { users } from './users.reducer';
import { exercisesPlan, dietPlan } from './plan.reducer';

const rootReducer = combineReducers({ users, exercisesPlan, dietPlan });
export default rootReducer;
