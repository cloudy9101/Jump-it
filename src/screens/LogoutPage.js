import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Button } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
export default class LogoutPage extends Component {
  render() {
    return (
      <Container>
        <HeaderComponent titleName="Logout" {...this.props} />
        <Button
          block
          rounded
          danger
          style={{ marginTop: 30, marginLeft: 10, marginRight: 10 }}
          onPress={() => this.props.navigation.navigate('SignIn')}
        >
          <Text>Logout</Text>
        </Button>
      </Container>
    );
  }
}
