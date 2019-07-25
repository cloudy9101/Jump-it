import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Container } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
export default class MeasurementPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent title={'Measure'} {...this.props} />
        <Text>MeasurementPage</Text>
      </Container>
    );
  }
}
