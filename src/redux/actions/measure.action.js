import {
  GET_HIGHBLOOD_DATA,
  GET_SUGAR_DATA,
  CLEAR_HIGHBLOOD,
  CLEAR_SUGAR,
  READ_STEPS,
  READ_FLOORS,
  READ_DISTANCE,
  CLEAR_STEPS,
  CLEAR_FLOORS,
  CLEAR_DISTANCE
} from '../actiontypes';
import { post, get } from '../../API';

export const saveMeasure = (body, token) => {
  return dispatch => {
    post('/api/users/measure/save', body, token);
  };
};

function getHighBloodData(payload) {
  return { type: GET_HIGHBLOOD_DATA, payload };
}
export const readHighBlood = (date, type, token) => {
  return dispatch => {
    get(`/api/users/measure/highblood/${date}/${type}`, token).then(res => {
      if (res.code === 0) {
        dispatch(getHighBloodData(res.data));
      }
    });
  };
};
function getSugarData(payload) {
  return { type: GET_SUGAR_DATA, payload };
}
export const readSugar = (date, type, token) => {
  return dispatch => {
    get(`/api/users/measure/sugar/${date}/${type}`, token).then(res => {
      if (res.code === 0) {
        dispatch(getSugarData(res.data));
      }
    });
  };
};

export const clearHighBloodState = () => ({ type: CLEAR_HIGHBLOOD });
export const clearSugarState = () => ({ type: CLEAR_SUGAR });

function getSteps(payload) {
  return { type: READ_STEPS, payload };
}
export const readStep = (date, type, token) => {
  return dispatch => {
    get(`/api/users/measure/step/${date}/${type}`, token).then(res => {
      console.log(res.data);
      if (res.code === 0) {
        dispatch(getSteps(res.data));
      } else {
        console.log('readStep  error...');
      }
    });
  };
};
function getDistances(payload) {
  return { type: READ_DISTANCE, payload };
}
export const readDistance = (date, type, token) => {
  return dispatch => {
    get(`/api/users/measure/distance/${date}/${type}`, token).then(res => {
      console.log(res.data);
      if (res.code === 0) {
        dispatch(getDistances(res.data));
      } else {
        console.log('readDistance  error...');
      }
    });
  };
};
function getFloor(payload) {
  return { type: READ_FLOORS, payload };
}
export const readFloor = (date, type, token) => {
  return dispatch => {
    get(`/api/users/measure/floor/${date}/${type}`, token).then(res => {
      console.log(res.data);
      if (res.code === 0) {
        dispatch(getFloor(res.data));
      } else {
        console.log('floor  error...');
      }
    });
  };
};

export const clearStep = () => ({ type: CLEAR_STEPS });
export const clearDistance = () => ({ type: CLEAR_DISTANCE });
export const clearFloor = () => ({ type: CLEAR_FLOORS });
