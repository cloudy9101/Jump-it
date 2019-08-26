import {
  LOGIN_SUCCESS,
  SIGN_UP,
  LOG_OUT,
  ERROR_MSG,
  LOGIN_FAIL,
  GET_USER_INFO,
  UPDATE_USER
} from '../actiontypes';
import { post, get, put } from '../../API';
import DeviceInfo from 'react-native-device-info';
import Firebase from '../../utils/FirebaseUtil';
import firebase from 'react-native-firebase';

function registerFailure(error) {
  return { type: ERROR_MSG, error };
}

function registerSuccess(token) {
  return { type: SIGN_UP, token };
}
function loginSuccess(token) {
  return { type: LOGIN_SUCCESS, token };
}
function loginFail(error) {
  return { type: LOGIN_FAIL, error };
}

function getUserInfo(payload) {
  return { type: GET_USER_INFO, payload };
}
function userUpdate(payload) {
  return { type: UPDATE_USER, payload };
}

export const logout = () => ({ type: LOG_OUT });
export const register = userInfo => {
  return dispatch => {
    post('/api/users/signup', userInfo).then(res => {
      if (res.code === 0) {
        dispatch(registerSuccess(res.data.token));
        dispatch(deviceReg(res.data.token));
      } else {
        dispatch(registerFailure(res));
      }
    });
  };
};

export const login = userInfo => {
  return dispatch => {
    post('/api/users/signin', userInfo).then(res => {
      if (res.code === 0) {
        dispatch(loginSuccess(res.data.token));
        dispatch(deviceReg(res.data.token));
      } else {
        dispatch(loginFail(res));
      }
    });
  };
};

export const findUseInfo = token => {
  return dispatch => {
    get('/api/users/find', token).then(res => {
      if (res.code === 0) {
        dispatch(getUserInfo(res.data));
      } else {
        console.log('wrong ......');
      }
    });
  };
};

export const updateUser = (body, token) => {
  return dispatch => {
    put('/api/users/update', body, token).then(res => {
      if (res.code === 0) {
        dispatch(userUpdate(res.data));
      }
    });
  };
};

export const deviceReg = (token) => {
  return () => {
    Firebase.getToken().then((fcmToken) => {
      if (fcmToken) {
        const deviceId = DeviceInfo.getUniqueID();
        console.log(fcmToken);
        console.log(deviceId);
        post('/api/users/deviceReg', { deviceId, regToken: fcmToken }, token).then(res => {
          console.log(res);
        }).catch(error => {
          console.log(error);
        });
      } else {
        console.log("user doesn't have a device token yet");
      }
    });
  };
}

export const deviceUnreg = (token) => {
  return () => {
    const deviceId = DeviceInfo.getUniqueID();
    post('/api/users/deviceUnreg', { deviceId }, token).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    });
  }
}

export const updateNotificationEnabled = (value, token) => {
  return dispatch => {
    put('/api/users/updateNotificationEnabled', { notificationEnabled: value }, token).then(res => {
      if (res.code === 0) {
        dispatch(userUpdate(res.data));
      }
    });
  };
};
