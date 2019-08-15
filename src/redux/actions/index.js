import {
  register,
  login,
  findUseInfo,
  updateUser,
  deviceReg,
  deviceUnreg,
  logout
} from './user.action';
import { changePassword } from './password.action';
import { fetchExercises, fetchDiets, addDiet } from './plan.action';
import { getStepCount, getFloor, getDistance } from './workout.action';
import { sendEmail } from './email.action';
import {
  saveMeasure,
  readHighBlood,
  readSugar,
  clearHighBloodState,
  clearSugarState,
  readStep,
  readDistance,
  readFloor,
  clearStep,
  clearDistance,
  clearFloor
} from './measure.action';
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
  logout,
  deviceReg,
  deviceUnreg,
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
  readSugar,
  clearSugarState,
  clearHighBloodState,
  readStep,
  readDistance,
  readFloor,
  clearStep,
  clearDistance,
  clearFloor,
  sendEmail
};
