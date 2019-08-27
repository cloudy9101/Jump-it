import firebase from 'react-native-firebase';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { deviceReg } from '../redux/actions';

const Firebase = {};

Firebase.setup = function() {
  firebase.messaging().hasPermission().then(enabled => {
    if (!enabled) {
      firebase.messaging().requestPermission().catch(error => {
        console.log(error);
      });
    }
  });
};

Firebase.onTokenRefreshListener = function() {
  return firebase.messaging().onTokenRefresh(() => {
    AsyncStorage.getItem('token').then(token => {
      dispatch(deviceReg(token));
    });
  });
};

Firebase.getToken = function() {
  return firebase.messaging().getToken();
}

Firebase.notificationChannel = new firebase.notifications.Android.Channel('Default', 'Default', firebase.notifications.Android.Importance.High).setDescription('Default notification channel');
firebase.notifications().android.createChannel(Firebase.notificationChannel);

Firebase.notificationListener = firebase.notifications().onNotification((notification) => {
  Alert.alert(
    notification.title,
    notification.body,
    [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  )
});

export default Firebase;
