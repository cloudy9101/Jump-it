import { SEND_EMAIL } from '../actiontypes';
import { post } from '../../API';

function emailMsg(code) {
  return { type: SEND_EMAIL, code };
}

export const sendEmail = body => {
  return dispatch => {
    post('/api/users/send', body).then(res => {
      if (res.code === 0) {
        dispatch(emailMsg(res.data));
      } else {
        dispatch(emailMsg(res));
      }
    });
  };
};
