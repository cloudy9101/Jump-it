import { FETCH_SUCCESS, FETCH_ERROR, FETCH_START } from '../actiontypes/index';

const exerciseInitState = { isFinished: true, data: [] };

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

export { exercisesPlan };
