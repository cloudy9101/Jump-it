import { FETCH_SUCCESS, FETCH_ERROR, ADD_DIET_SUCCESS } from '../actiontypes/index';

const exerciseInitState = { isFinished: true, data: [] };
const dietInitState = { isFinished: true, data: [] };

const exercisesPlan = (state = exerciseInitState, action) => {
  switch(action.type) {
    case FETCH_SUCCESS:
      return { isFinished: true, data: action.data };
    case FETCH_ERROR:
      return { isFinished: true, error: action.error };
    default:
      return state;
  }
}

const dietPlan = (state = dietInitState, action) => {
  switch(action.type) {
    case FETCH_SUCCESS:
      return { isFinished: true, data: action.data };
    case FETCH_ERROR:
      return { isFinished: true, error: action.error };
    case ADD_DIET_SUCCESS:
      return { isFinished: true, data: [...state.data, action.data] };
    default:
      return state;
  }
}

export { exercisesPlan, dietPlan };
