import { SIGN_UP, ERROR_MSG } from '../actiontypes';

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
  weight: ''
};

export const users = (state = initState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, ...action.msg };
    case ERROR_MSG:
      return { ...state, ...action.error };
    default:
      return state;
  }
};
