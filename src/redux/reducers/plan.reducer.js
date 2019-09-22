import {
  FETCH_SUCCESS,
  FETCH_ERROR,
  ADD_DIET_SUCCESS,
  CLEAR_PLAN
} from '../actiontypes/index';

const exerciseInitState = { isFinished: true, data: [], isLoading: false };
const dietInitState = { isFinished: true, data: [], isLoading: false };

const exercisesPlan = (state = exerciseInitState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { isFinished: true, data: action.data, isLoading: true };
    case FETCH_ERROR:
      return { isFinished: true, error: action.error, isLoading: true };
    case CLEAR_PLAN: {
      console.log('ssss');
      return { data: [] };
    }

    default:
      return state;
  }
};

const dietPlan = (state = dietInitState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { isFinished: true, data: action.data, isLoading: true };
    case FETCH_ERROR:
      return { isFinished: true, error: action.error, isLoading: true };
    case ADD_DIET_SUCCESS:
      return { isFinished: true, data: [...state.data, action.data] };
    default:
      return state;
  }
};

export { exercisesPlan, dietPlan };
