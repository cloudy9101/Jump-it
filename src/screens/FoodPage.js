import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
export default class FoodPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <HeaderComponent title={navigation.state.routeName} {...this.props} />
        <Text>food!</Text>
      </Container>
    );
  }
}
