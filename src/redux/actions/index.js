import { register, login, findUseInfo, updateUser } from './user.action';
import { changePassword } from './password.action';
import { fetchExercises, fetchDiets, addDiet } from './plan.action';
import { getStepCount, getFloor, getDistance } from './workout.action';
import { saveMeasure, readHighBlood, readSugar } from './measure.action';
import {
  addFood,
  updateFoodValue,
  updateFoodName,
  deleteFood,
  fetchFoods
} from './foods.action';
export {
  register,
  login,
  fetchExercises,
  fetchDiets,
  addDiet,
  findUseInfo,
  changePassword,
  updateUser,
  addFood,
  updateFoodValue,
  updateFoodName,
  deleteFood,
  fetchFoods,
  getStepCount,
  getFloor,
  getDistance,
  saveMeasure,
  readHighBlood,
  readSugar
};
