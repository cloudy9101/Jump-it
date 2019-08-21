import React, { Component } from 'react';
import { Image, View } from 'react-native';
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
  Icon
} from 'native-base';
import KeyboardShift from '../components/KeyboardShift';
import { connect } from 'react-redux';
import { login, findUseInfo } from '../redux/actions';
import ValidationUtil from '../utils/ValidationUtil';
import AsyncStorage from '@react-native-community/async-storage';
export class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.textInput1 = React.createRef();
    this.textInput2 = React.createRef();
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
        style: {
          marginTop: 65
        },
        position: 'top',
        text: 'All Fields Are Required..',
        buttonText: 'Cancel',
        type: 'danger',
        duration: 2000
      });
      return;
    }
    this.props.login({ email, password });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.users.isFinished) {
      AsyncStorage.setItem('token', nextProps.users.token);
      this.props.findUseInfo(nextProps.users.token);
      this.props.navigation.navigate('home');
    } else {
      Toast.show({
        style: {
          marginTop: 65
        },
        position: 'top',
        text: nextProps.users.error,
        buttonText: 'Cancel',
        type: 'danger',
        duration: 2000
      });
      this.textInput2.current._root.clear();
      this.textInput1.current._root.clear();
    }
  }

  render() {
    return (
      <Container
        style={{
          backgroundColor: '#1f3954'
        }}
      >
        <KeyboardShift>
          <Form
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 40
            }}
          >
            <Image
              source={require('../../assets/jump.png')}
              style={{
                width: '100%',
                height: '50%'
              }}
            />
            <Item inlineLabel style={{ marginLeft: 15, marginRight: 15 }}>
              <Icon
                active
                name="envelope"
                type="EvilIcons"
                style={{ color: '#ffffff' }}
                fontSize="33"
              />
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
                ref={this.textInput1}
                style={{ color: '#ffffff', flex: 1, fontSize: 16 }}
                onChangeText={text => this.setState({ email: text })}
              />
            </Item>

            <Item
              inlineLabel
              style={{ marginTop: 10, marginLeft: 15, marginRight: 15 }}
            >
              <Icon
                active
                name="lock"
                type="AntDesign"
                style={{ color: '#ffffff' }}
                fontSize="27"
              />
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
                ref={this.textInput2}
                style={{ flex: 1, fontSize: 16, color: '#ffffff' }}
                secureTextEntry={true}
                onChangeText={text => this.setState({ password: text })}
              />
            </Item>

            <Button
              block
              rounded
              bordered
              onPress={this.btnHandler}
              style={{
                marginTop: 40,
                marginLeft: 15,
                marginRight: 15,
                borderColor: '#fff'
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Helvetica',
                  color: '#fff'
                }}
              >
                Sign In
              </Text>
            </Button>
          </Form>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flex: 1
            }}
          >
            <View>
              <Button
                transparent
                onPress={() => {
                  this.props.navigation.navigate('Forget');
                }}
                light
                style={{ borderWidth: 0 }}
              >
                <Text
                  style={{
                    fontSize: 19,
                    fontFamily: 'Helvetica',
                    color: '#58a4d1'
                  }}
                >
                  Forget Password
                </Text>
              </Button>
            </View>
            <View style={{ marginBottom: 60 }}>
              <Button
                transparent
                onPress={() => {
                  this.props.navigation.navigate('SignUp');
                }}
                light
                style={{ borderWidth: 0 }}
              >
                <Text
                  style={{
                    fontSize: 19,
                    fontFamily: 'Helvetica',
                    color: '#58a4d1'
                  }}
                >
                  <Icon
                    name="registered"
                    type="FontAwesome"
                    style={{
                      fontSize: 20,
                      color: '#58a4d1'
                    }}
                  />
                  Sign Up
                </Text>
              </Button>
            </View>
          </View>
        </KeyboardShift>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users
});
const mapDispatchToProps = { login, findUseInfo };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInPage);
