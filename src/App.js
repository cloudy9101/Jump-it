import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Root } from 'native-base';
import { Platform, StyleSheet, View } from 'react-native';

import AppNavigator from './navigations/AppNavigator';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppNavigator />
        </Root>
      </Provider>
    );
  }
}
