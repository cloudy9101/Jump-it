import {
  LOGIN_SUCCESS,
  SIGN_UP,
  LOG_OUT,
  ERROR_MSG,
  LOGIN_FAIL,
  GET_USER_INFO,
  UPDATE_USER
} from '../actiontypes';
import { post, get, put } from '../../API';

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
function userUpdate(payload) {
  return { type: UPDATE_USER, payload };
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
      if (res.code === 0) {
        dispatch(getUserInfo(res.data));
      } else {
        console.log('wrong ......');
      }
    });
  };
};

export const updateUser = (body, token) => {
  return dispatch => {
    put('/api/users/update', body, token).then(res => {
      console.log(res);
      if (res.code === 0) {
        dispatch(userUpdate(res.data));
      }
    });
  };
};
