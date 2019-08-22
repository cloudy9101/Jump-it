import { SEND_EMAIL } from '../actiontypes';

initState = {
  code: 0
};
export const email = (state = initState, action) => {
  switch (action.type) {
    case SEND_EMAIL: {
      return { code: action.code };
    }
    default:
      return state;
  }
};
