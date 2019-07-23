import { combineReducers } from 'redux';
import { users } from './users.reducer';
import { exercisesPlan } from './plan.reducer';

const rootReducer = combineReducers({ users, exercisesPlan });
export default rootReducer;
