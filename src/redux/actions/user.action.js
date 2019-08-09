import {
  LOGIN_SUCCESS,
  SIGN_UP,
  LOG_OUT,
  ERROR_MSG,
  LOGIN_FAIL,
  GET_USER_INFO
} from '../actiontypes';
import { post, get } from '../../API';

function registerFailure(error) {
  return { type: ERROR_MSG, error };
}

function registerSuccess(token) {
  return { type: SIGN_UP, token };
}
function loginSuccess(token) {
  return { type: LOGIN_SUCCESS, token };
}
function loginFail(error) {
  return { type: LOGIN_FAIL, error };
}

function getUserInfo(payload) {
  return { type: GET_USER_INFO, payload };
}

export const logout = () => ({ type: LOG_OUT });
export const register = userInfo => {
  return dispatch => {
    post('/api/users/signup', userInfo).then(res => {
      if (res.code === 0) {
        dispatch(registerSuccess(res.data.token));
      } else {
        dispatch(registerFailure(res));
      }
    });
  };
};

export const login = userInfo => {
  return dispatch => {
    post('/api/users/signin', userInfo).then(res => {
      if (res.code === 0) {
        dispatch(loginSuccess(res.data.token));
      } else {
        dispatch(loginFail(res));
      }
    });
  };
};

export const findUseInfo = token => {
  return dispatch => {
    get('/api/users/find', token).then(res => {
      console.log(res, 'ddddd');
      if (res.code === 0) {
        dispatch(getUserInfo(res.data));
      } else {
        console.log('wrong ......');
      }
    });
  };
};
