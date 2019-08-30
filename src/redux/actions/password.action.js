import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_FAIL,
  FORGET_PASSWORD
} from '../actiontypes';
import { put } from '../../API';

function passwordChange(msg) {
  return { type: CHANGE_PASSWORD, msg };
}
function passwordChangeFail(msg) {
  return { type: CHANGE_PASSWORD_FAIL, msg };
}

export const changePassword = (body, token) => {
  return dispatch => {
    put('/api/users/password', body, token).then(res => {
      if (res.code === 0) {
        dispatch(passwordChange(res.data));
      } else {
        dispatch(passwordChangeFail(res));
      }
    });
  };
};

function passwordUpdate(msg) {
  return { type: CHANGE_PASSWORD_FAIL, msg };
}

export const forgetPassword = (body, token) => {
  return dispatch => {
    put('/api/users/forget', body, token).then(res => {
      if (res.code === 0) {
        dispatch(passwordUpdate(res.data));
      }
    });
  };
};
