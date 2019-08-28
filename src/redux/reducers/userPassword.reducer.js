import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_FAIL,
  FORGET_PASSWORD
} from '../actiontypes';
initState = {
  msg: '',
  isValid: false
};
export const userPassword = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD:
      return { msg: action.msg, isValid: true };
    case CHANGE_PASSWORD_FAIL:
      return { ...initState, msg: action.msg };
    case FORGET_PASSWORD:
      return { ...initState, msg: action.msg };
    default:
      return state;
  }
};
