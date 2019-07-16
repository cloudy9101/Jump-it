import { LOGIN_SUCCESS, SIGN_UP, ERROR_MSG } from '../actiontypes';

function failure(error) {
  return { type: ERROR_MSG, error };
}
