import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
import HeaderComponent from '../components/DrawerHeaderComponent';
export class SettingPage extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent titleName="Setting" {...this.props} />
      </Container>
    );
  }
}

export default SettingPage;
