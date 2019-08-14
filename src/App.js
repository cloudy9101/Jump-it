import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Root } from 'native-base';
import { Platform, StyleSheet, View } from 'react-native';
import Firebase from './utils/FirebaseUtil';

import AppNavigator from './navigations/AppNavigator';
export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <Root>
          <AppNavigator />
        </Root>
      </Provider>
    );
  }
}
