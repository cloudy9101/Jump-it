import React, { Component } from 'react';
import {
  Container,
  Text,
  Form,
  Item,
  Label,
  Input,
  Icon,
  Button,
  Toast
} from 'native-base';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { changePassword } from '../redux/actions';
import ValidationUtil from '../utils/ValidationUtil';
class PasswordChangePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      newPassword: '',
      rePassword: ''
    };
    this.btnHandler = this.btnHandler.bind(this);
  }
  btnHandler() {
    const { password, newPassword, rePassword } = this.state;
    if (
      ValidationUtil.isEmpty(password) ||
      ValidationUtil.isEmpty(newPassword) ||
      ValidationUtil.isEmpty(rePassword)
    ) {
      Toast.show({
        text: 'All Fields Are Required..',
        buttonText: 'Cancel',
        type: 'danger',
        duration: 2000
      });
      return;
    }
    if (ValidationUtil.validPassword(newPassword)) {
      Toast.show({
        text: 'Minimum 8 Characters',
        buttonText: 'Cancel',
        type: 'danger',
        duration: 2000
      });
      return;
    }
    if (!ValidationUtil.passwordMatch(newPassword, rePassword)) {
      Toast.show({
        text: 'Password Not Matched',
        buttonText: 'Cancel',
        type: 'danger',
        duration: 2000
      });
      return;
    }
    AsyncStorage.getItem('token').then(token => {
      this.props.changePassword({ password, newPassword }, token);
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.password.isValid) {
      this.props.navigation.goBack();
    } else {
      Toast.show({
        text: nextProps.password.msg,
        buttonText: 'Cancel',
        type: 'danger',
        duration: 2000
      });
    }
  }
  render() {
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <Form>
          <Item floatingLabel>
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
              onChangeText={text => this.setState({ password: text })}
              style={{ flex: 1, fontSize: 16, color: '#ffffff' }}
            />
          </Item>
          <Item floatingLabel>
            <Label
              style={{
                color: '#ffffff',
                fontFamily: 'Helvetica',
                fontSize: 18
              }}
            >
              New Password
            </Label>
            <Input
              onChangeText={text => this.setState({ newPassword: text })}
              style={{ flex: 1, fontSize: 16, color: '#ffffff' }}
              secureTextEntry={true}
            />
          </Item>
          <Item floatingLabel last>
            <Label
              style={{
                color: '#ffffff',
                fontFamily: 'Helvetica',
                fontSize: 18
              }}
            >
              Confirm Password
            </Label>
            <Input
              onChangeText={text => this.setState({ rePassword: text })}
              style={{ flex: 1, fontSize: 16, color: '#ffffff' }}
              secureTextEntry={true}
            />
          </Item>
          <Button
            block
            rounded
            onPress={this.btnHandler}
            success
            style={{
              marginTop: 40,
              marginLeft: 10,
              marginRight: 10
              //  borderColor: '#fff'
            }}
          >
            <Text
              style={{
                // color: '#ffffff',
                fontFamily: 'Helvetica',
                fontSize: 18
              }}
            >
              Conform
            </Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  password: state.userPassword
});
const mapDispatchToProps = { changePassword };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordChangePage);
