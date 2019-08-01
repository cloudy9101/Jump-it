import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
export default class FoodPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent title={navigation.state.routeName} {...this.props} />
        <Content contentContainerStyle={{ flex: 1 }}>
          <Text>food!</Text>
        </Content>
      </Container>
    );
  }
}
