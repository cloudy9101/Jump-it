import { LOGIN_SUCCESS, SIGN_UP, ERROR_MSG } from '../actiontypes';
import { post } from '../../API';

function failure(error) {
  return { type: ERROR_MSG, error };
}

function registerSuccess(msg) {
  return { type: SIGN_UP, msg };
}
export const register = userInfo => {
  return dispatch => {
    post('/api/users/signup', userInfo).then(res => {
      if (res.code === 0) {
        console.log('action......success');
        dispatch(registerSuccess(res.data));
      } else {
        console.log('action......fail');
        dispatch(errorMsg(res.msg));
      }
    });
  };
};
