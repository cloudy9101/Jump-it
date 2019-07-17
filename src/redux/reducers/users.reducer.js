import {
  SIGN_UP,
  ERROR_MSG,
  LOG_OUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../actiontypes';

const initState = {
  email: '',
  userName: '',
  password: '',
  avator: '',
  firstName: '',
  lastName: '',
  gender: 1,
  birthday: '',
  height: '',
  weight: '',
  isRegistered: false
};

export const users = (state = initState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, msg: action.msg, isRegistered: true };
    case ERROR_MSG:
      return { ...state, error: action.error };
    case LOG_OUT:
      return { ...initState };
    case LOGIN_SUCCESS:
      return { token: action.token };
    case LOGIN_FAIL:
      return { ...state };
    default:
      return state;
  }
};
