import {
  LOGIN_SUCCESS,
  SIGN_UP,
  LOG_OUT,
  ERROR_MSG,
  LOGIN_FAIL
} from '../actiontypes';
import { post } from '../../API';

function registerFailure(error) {
  return { type: ERROR_MSG, error };
}

function registerSuccess(msg) {
  return { type: SIGN_UP, msg };
}
function loginSuccess(token) {
  return { type: LOGIN_SUCCESS, token };
}
function loginFail(error) {
  return { type: LOGIN_FAIL, error };
}
export const logout = () => ({ type: LOG_OUT });

export const register = userInfo => {
  return dispatch => {
    post('/api/users/signup', userInfo).then(res => {
      if (res.code === 0) {
        dispatch(registerSuccess(res.msg));
      } else {
        dispatch(registerFailure(res));
      }
    });
  };
};
export const login = userInfo => {
  return dispatch => {
    post('/api/users/signin', userInfo).then(res => {
      console.log(res);
      if (res.code === 0) {
        dispatch(loginSuccess(res.data.token));
      } else {
        dispatch(loginFail(res.msg));
      }
    });
  };
};
