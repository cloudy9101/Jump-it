import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
class AboutPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent title={'About'} {...this.props} />
        <Content>
          <Text>about!</Text>
        </Content>
      </Container>
    );
  }
}

export default AboutPage;
