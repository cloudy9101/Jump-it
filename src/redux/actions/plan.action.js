import {
  FETCH_SUCCESS,
  FETCH_ERROR,
  ADD_DIET_SUCCESS,
} from '../actiontypes/index';
import { get, post } from '../../API';

function fetchSuccess(data) {
  return { type: FETCH_SUCCESS, data };
}

function fetchError(error) {
  return { type: FETCH_ERROR, error }
}

function addDietSuccess(data) {
  return { type: ADD_DIET_SUCCESS, data };
}

function fetchExercises(date, token) {
  return dispatch => {
    get('/api/users/plan/exercises?date=' + date, token).then(res => {
      if(res.code === 0) {
        dispatch(fetchSuccess(res.data));
      } else {
        dispatch(fetchError(res));
      }
    })
  }
}

function fetchDiets(token) {
  return dispatch => {
    get('/api/users/plan/diets', token).then(res => {
      if(res.code === 0) {
        dispatch(fetchSuccess(res.data));
      } else {
        dispatch(fetchError(res));
      }
    })
  }
}

function addDiet(token, name, value) {
  return dispatch => {
    post('/api/users/plan/diets', { name, value }, token).then(res => {
      if(res.code === 0) {
        console.log(res.data);
        dispatch(addDietSuccess(res.data));
      } else {
        dispatch(fetchError(res));
      }
    })
  }
}

export { fetchExercises, fetchDiets, addDiet };
