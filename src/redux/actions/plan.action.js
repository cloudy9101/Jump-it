import {
  FETCH_SUCCESS,
  FETCH_ERROR,
} from '../actiontypes/index';
import { get } from '../../API';

function fetchSuccess(data) {
  return { type: FETCH_SUCCESS, data };
}

function fetchError(error) {
  return { type: FETCH_ERROR, error }
}

function fetchExercises(date) {
  return dispatch => {
    get('/api/users/plan/exercises?date=' + date).then(res => {
      if(res.code === 0) {
        dispatch(fetchSuccess(res.data));
      } else {
        dispatch(fetchError(res));
      }
    })
  }
}

export { fetchExercises };
