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
  isFinished: false,
  token: ''
};

export const users = (state = initState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { isFinished: true, token: action.token };
    case ERROR_MSG:
      return { error: action.error };
    case LOG_OUT:
      return { ...initState };
    case LOGIN_SUCCESS:
      return { token: action.token, isFinished: true };
    case LOGIN_FAIL:
      return { error: action.error };
    default:
      return state;
  }
};
