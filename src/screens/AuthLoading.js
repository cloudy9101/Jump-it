import React, { Component } from 'react';
import { Container, Header, Content, Spinner, Body } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

export class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    // await AsyncStorage.removeItem('token'); for testing
    const userToken = await AsyncStorage.getItem('token');
    console.log(userToken);

    this.props.navigation.navigate(userToken ? 'home' : 'login');
  };
  render() {
    return (
      <Container
        style={{
          backgroundColor: '#1f3954',
          justifyContent: 'center'
        }}
      >
        <Spinner color="#fff" />
      </Container>
    );
  }
}

export default AuthLoading;
