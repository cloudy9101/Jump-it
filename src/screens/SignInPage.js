import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import {
  Container,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Content,
  Toast,
  Spinner
} from 'native-base';
import KeyboardShift from '../components/KeyboardShift';
import { connect } from 'react-redux';
import { login } from '../redux/actions';
import ValidationUtil from '../utils/ValidationUtil';
import AsyncStorage from '@react-native-community/async-storage';
export class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.btnHandler = this.btnHandler.bind(this);
  }
  async btnHandler() {
    const { email, password } = this.state;
    if (ValidationUtil.isEmpty(email) || ValidationUtil.isEmpty(password)) {
      Toast.show({
        text: 'All Fields Are Required..',
        buttonText: 'Cancel',
        type: 'danger',
        duration: 2500
      });
      return;
    }
    this.props.login({ email, password });
  }
  async componentWillReceiveProps(nextProps) {
    if (nextProps.users.isFinished) {
      await AsyncStorage.setItem(
        'token',
        JSON.stringify(this.props.users.token)
      );

      let value = await AsyncStorage.getItem('token');
      console.log(JSON.parse(value) + '    22222222');

      setTimeout(() => {
        this.props.navigation.navigate('home');
      }, 250);
    } else {
      Toast.show({
        text: nextProps.users.error,
        buttonText: 'Cancel',
        type: 'danger',
        duration: 2500
      });
    }
  }

  render() {
    return (
      <KeyboardShift>
        <Container style={styles.containerStyle}>
          <Form style={styles.formStyle}>
            <View
              style={{
                alignItems: 'center',
                margin: 10
              }}
            >
              <Image
                source={require('../../assets/jump.jpg')}
                style={{
                  width: '90%',
                  borderRadius: 50
                }}
              />
            </View>

            <Item inlineLabel style={{ margin: 10 }}>
              <Label>Email</Label>
              <Input onChangeText={text => this.setState({ email: text })} />
            </Item>

            <Item inlineLabel last style={{ margin: 10 }}>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                onChangeText={text => this.setState({ password: text })}
              />
            </Item>

            <View style={styles.buttonStyle}>
              <Button
                bordered
                onPress={() => {
                  this.props.navigation.navigate('SignUp');
                }}
                light
              >
                <Text>Sign Up</Text>
              </Button>

              <Button bordered onPress={this.btnHandler} light>
                <Text>Sign In</Text>
              </Button>
            </View>
          </Form>
        </Container>
      </KeyboardShift>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users
});
const mapDispatchToProps = { login };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInPage);
const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#f5a742'
  },

  formStyle: {
    marginTop: 110
  },
  buttonStyle: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around'
  }
});
