import React, { Component } from 'react';
import { Provider, dispatch } from 'react-redux';
import { store } from './redux/store';
import { Root } from 'native-base';
import AppNavigator from './navigations/AppNavigator';

import Firebase from './utils/FirebaseUtil';

export default class App extends Component {

  componentDidMount() {
    Firebase.setup();
    this.onTokenRefreshListener = Firebase.onTokenRefreshListener();
  }

  componentWillUnmount() {
    this.onTokenRefreshListener();
  }

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
