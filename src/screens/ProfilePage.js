import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
export default class ProfilePage extends Component {
  render() {
    return (
      <Container>
        <HeaderComponent titleName="Profile" {...this.props} />
      </Container>
    );
  }
}
