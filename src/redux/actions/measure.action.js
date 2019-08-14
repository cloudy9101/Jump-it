import { SUGAR_INTAKE, HIGH_BLOOD } from '../actiontypes';
import { post } from '../../API';

function getMeasureData(payload) {
  return { type: SUGAR_INTAKE, payload };
}
export const saveMeasure = (body, token) => {
  return dispatch => {
    post('/api/users/measure/save', body, token);
  };
};
