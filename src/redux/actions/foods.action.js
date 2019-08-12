import {
  FETCH_FOODS_SUCCESS,
  FETCH_FOODS_ERROR,
  ADD_FOOD_SUCCESS,
  UPDATE_FOOD_VALUE,
  UPDATE_FOOD_NAME,
  DELETE_FOOD_SUCCESS,
} from '../actiontypes/index';
import { get, post, put, del } from '../../API';

function addFoodSuccess(data) {
  return { type: ADD_FOOD_SUCCESS, data: data }
}

function updateFoodValueSuccess(id, food) {
  return { type: UPDATE_FOOD_VALUE, data: { id, food } };
}

function updateFoodNameSuccess(id, food) {
  return { type: UPDATE_FOOD_NAME, data: { id, food } };
}

function deleteFoodSuccess(id) {
  return { type: DELETE_FOOD_SUCCESS, data: id };
}

function fetchFoodsSuccess(data) {
  return { type: FETCH_FOODS_SUCCESS, data: data };
}

function fetchFoodsError(data) {
  return { type: FETCH_FOODS_ERROR, data: data };
}

function addFood(token, name, value) {
  return dispatch => {
    post('/api/users/foods', { name, value }, token).then(res => {
      if (res.code === 0) {
        dispatch(addFoodSuccess(res.data));
      } else {
        dispatch(fetchFoodsError(res));
      }
    });
  }
}

function updateFoodValue(token, id, value) {
  return dispatch => {
    put('/api/users/foods/' + id, { value }, token).then(res => {
      if (res.code === 0) {
        dispatch(updateFoodValueSuccess(id, res.data));
      } else {
        dispatch(fetchFoodsError(res));
      }
    });
  }
}

function updateFoodName(token, id, name) {
  return dispatch => {
    put('/api/users/foods/' + id, { name }, token).then(res => {
      if (res.code === 0) {
        dispatch(updateFoodNameSuccess(id, res.data));
      } else {
        dispatch(fetchFoodsError(res));
      }
    });
  }
}

function deleteFood(token, id) {
  return dispatch => {
    del('/api/users/foods/' + id, token).then(res => {
      if (res.code === 0) {
        dispatch(deleteFoodSuccess(id));
      } else {
        dispatch(fetchFoodsError(res));
      }
    });
  }
}

function fetchFoods(token) {
  return dispatch => {
    get('/api/users/foods', token).then(res => {
      if (res.code === 0) {
        dispatch(fetchFoodsSuccess(res.data));
      } else {
        dispatch(fetchFoodsError(res));
      }
    });
  };
}

export { addFood, updateFoodValue, updateFoodName, deleteFood, fetchFoods };
