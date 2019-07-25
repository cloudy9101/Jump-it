import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
import HeaderComponent from '../components/DrawerHeaderComponent';
export default class ProfilePage extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent titleName="Profile" {...this.props} />
      </Container>
    );
  }
}
