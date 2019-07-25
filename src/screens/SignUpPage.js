import React, { Component } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Content,
  Toast
} from 'native-base';
import KeyboardShift from '../components/KeyboardShift';
import ValidationUtil from '../utils/ValidationUtil';
export default class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      repassword: ''
    };
    this.btnHandler = this.btnHandler.bind(this);
  }
  async btnHandler() {
    const { email, username, password, repassword } = this.state;

    // if (
    //   ValidationUtil.isEmpty(email) ||
    //   ValidationUtil.isEmpty(username) ||
    //   ValidationUtil.isEmpty(password) ||
    //   ValidationUtil.isEmpty(repassword)
    // ) {
    //   Toast.show({
    //     text: 'All Fields Are Required..',
    //     buttonText: 'Cancel',
    //     type: 'danger',
    //     duration: 2500
    //   });
    //   return;
    // }
    // if (!ValidationUtil.isEmail(email)) {
    //   Toast.show({
    //     text: 'Email Format Wrong..',
    //     buttonText: 'Cancel',
    //     type: 'danger',
    //     duration: 2500
    //   });
    //   return;
    // }

    // if (
    //   ValidationUtil.validPassword(password) ||
    //   ValidationUtil.validPassword(repassword)
    // ) {
    //   Toast.show({
    //     text: 'Minimum 8 Characters',
    //     buttonText: 'Cancel',
    //     type: 'danger',
    //     duration: 2500
    //   });
    //   return;
    // }
    // if (!ValidationUtil.passwordMatch(password, repassword)) {
    //   Toast.show({
    //     text: 'Use The Same Passwords',
    //     buttonText: 'Cancel',
    //     type: 'danger',
    //     duration: 2500
    //   });
    //   return;
    // }
    await AsyncStorage.setItem(
      'payload',
      JSON.stringify({
        email,
        username,
        password
      })
    );
    this.props.navigation.navigate('SignUp1');
  }
  render() {
    return (
      <KeyboardShift>
        <Container style={{ backgroundColor: '#1f3954' }}>
          <Form style={{ marginTop: 80 }}>
            <Item stackedLabel style={{ margin: 10 }}>
              <Label
                style={{
                  color: '#ffffff',
                  fontFamily: 'Helvetica',
                  fontSize: 18
                }}
              >
                Email
              </Label>
              <Input
                style={{ color: '#ffffff' }}
                onChangeText={text => this.setState({ email: text })}
              />
            </Item>
            <Item stackedLabel style={{ margin: 10 }}>
              <Label
                style={{
                  color: '#ffffff',
                  fontFamily: 'Helvetica',
                  fontSize: 18
                }}
              >
                User Name
              </Label>
              <Input
                style={{ color: '#ffffff' }}
                onChangeText={text => this.setState({ username: text })}
              />
            </Item>
            <Item stackedLabel style={{ margin: 10 }}>
              <Label
                style={{
                  color: '#ffffff',
                  fontFamily: 'Helvetica',
                  fontSize: 18
                }}
              >
                Password
              </Label>
              <Input
                style={{ color: '#ffffff' }}
                secureTextEntry={true}
                onChangeText={text => this.setState({ password: text })}
              />
            </Item>
            <Item stackedLabel style={{ margin: 10 }}>
              <Label
                style={{
                  color: '#ffffff',
                  fontFamily: 'Helvetica',
                  fontSize: 18
                }}
              >
                Repassword
              </Label>
              <Input
                style={{ color: '#ffffff' }}
                secureTextEntry={true}
                onChangeText={text => this.setState({ repassword: text })}
              />
            </Item>
            <View style={{ marginTop: 40, marginLeft: 10, marginRight: 10 }}>
              <Button block rounded bordered light onPress={this.btnHandler}>
                <Text
                  style={{
                    color: '#ffffff',
                    fontFamily: 'Helvetica',
                    fontSize: 18
                  }}
                >
                  Next
                </Text>
              </Button>
            </View>
          </Form>
        </Container>
      </KeyboardShift>
    );
  }
}
