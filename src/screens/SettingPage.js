import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
export class SettingPage extends Component {
  render() {
    return (
      <Container>
        <HeaderComponent titleName="Setting" {...this.props} />
      </Container>
    );
  }
}

export default SettingPage;
