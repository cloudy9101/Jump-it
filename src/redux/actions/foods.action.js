import {
  ADD_FOOD_SUCCESS,
  UPDATE_FOOD_VALUE,
  UPDATE_FOOD_NAME,
  DELETE_FOOD_SUCCESS,
} from '../actiontypes/index';
import { get, post } from '../../API';

function addFoodSuccess(data) {
  return { type: ADD_FOOD_SUCCESS, data: data }
}

function updateFoodValueSuccess(id, value) {
  return { type: UPDATE_FOOD_VALUE, data: { id, value } };
}

function updateFoodNameSuccess(id, name) {
  return { type: UPDATE_FOOD_NAME, data: { id, name } };
}

function deleteFoodSuccess(id) {
  return { type: DELETE_FOOD_SUCCESS, data: id };
}

function addFood(token, name, value) {
  return dispatch => {
    const data = { id: token, name: name, value: value };
    dispatch(addFoodSuccess(data));
  }
}

function updateFoodValue(id, value) {
  return dispatch => {
    dispatch(updateFoodValueSuccess(id, value));
  }
}

function updateFoodName(id, name) {
  return dispatch => {
    dispatch(updateFoodNameSuccess(id, name));
  }
}

function deleteFood(id) {
  return dispatch => {
    console.log(id);
    dispatch(deleteFoodSuccess(id));
  }
}

export { addFood, updateFoodValue, updateFoodName, deleteFood };
