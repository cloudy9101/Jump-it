import {
  SIGN_UP,
  ERROR_MSG,
  LOG_OUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_USER_INFO,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_FAIL,
  UPDATE_USER
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
  token: '',
  notificationEnabled: true
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
    case GET_USER_INFO:
      return {
        ...action.payload,
        isFinished: true
      };
    case UPDATE_USER:
      return {
        ...action.payload,
        isFinished: true
      };
    default:
      return state;
  }
};
