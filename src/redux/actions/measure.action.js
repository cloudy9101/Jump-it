import { GET_HIGHBLOOD_DATA } from '../actiontypes';
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
