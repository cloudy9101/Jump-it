import firebase from 'react-native-firebase';
import { Alert } from 'react-native';

const Firebase = {};

firebase.messaging().hasPermission().then(enabled => {
  if (!enabled) {
    firebase.messaging().requestPermission().catch(error => {
      console.log(error);
    });
  }
});

firebase.messaging().getToken().then((fcmToken) => {
  if (fcmToken) {
    console.log(fcmToken);
  } else {
      // user doesn't have a device token yet
    console.log("user doesn't have a device token yet");
  }
});

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
