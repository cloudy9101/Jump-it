import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Container, Content } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
export default class MeasurementPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent title={'Measure'} {...this.props} />
        <Content>
          <Text>MeasurementPage</Text>
        </Content>
      </Container>
    );
  }
}
