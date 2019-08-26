import { SEND_EMAIL } from '../actiontypes';

initState = {
  code: 0,
  email: ''
};
export const email = (state = initState, action) => {
  switch (action.type) {
    case SEND_EMAIL: {
      return { ...initState, ...action.code }; //code: action.code.code, email: action.code.email
    }
    default:
      return state;
  }
};
