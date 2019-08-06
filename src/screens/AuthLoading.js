import React, { Component } from 'react';
import { Container, Header, Content, Spinner, Body } from 'native-base';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { findUseInfo } from '../redux/actions';

export class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    // await AsyncStorage.removeItem('token'); for testing
    const userToken = await AsyncStorage.getItem('token');

    if (userToken) {
      console.log(userToken);
      await this.props.findUseInfo(userToken);
      this.props.navigation.navigate('home');
    } else {
      this.props.navigation.navigate('login');
    }
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

const mapDispatchToProps = { findUseInfo };
export default connect(
  null,
  mapDispatchToProps
)(AuthLoading);
