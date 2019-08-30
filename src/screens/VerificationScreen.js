import React, { Component } from 'react';
import {
  Container,
  Content,
  Input,
  Text,
  Item,
  Button,
  View,
  Label,
  Toast,
  Form
} from 'native-base';
import ValidationUtil from '../utils/ValidationUtil';
import { connect } from 'react-redux';
import { forgetPassword } from '../redux/actions';

class ForgetPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      isOk: false,
      rePassword: '',
      newPassword: ''
    };
    this.btnHandler = this.btnHandler.bind(this);
  }
  btnHandler() {
    const { code, newPassword, rePassword, isOk } = this.state;
    if (ValidationUtil.isEmpty(code)) {
      Toast.show({
        style: {
          marginTop: 65
        },
        position: 'top',
        text: 'Verification Empty',
        buttonText: 'Cancel',
        type: 'danger',
        duration: 2000
      });
      return;
    }
    //code == this.props.email.code
    if (code == this.props.email.code) {
      this.setState({
        isOk: true
      });
    } else {
      Toast.show({
        style: {
          marginTop: 65
        },
        position: 'top',
        text: 'Verification Not Pass',
        buttonText: 'Cancel',
        type: 'danger',
        duration: 2000
      });
    }

    if (ValidationUtil.validPassword(newPassword)) {
      Toast.show({
        style: {
          marginTop: 65
        },
        position: 'top',
        text: 'Minimum 8 Characters',
        buttonText: 'Cancel',
        type: 'danger',
        duration: 2000
      });
      return;
    }
    if (!ValidationUtil.passwordMatch(newPassword, rePassword)) {
      Toast.show({
        style: {
          marginTop: 65
        },
        position: 'top',
        text: 'Password Not Matched',
        buttonText: 'Cancel',
        type: 'danger',
        duration: 2000
      });
      return;
    }

    if (isOk) {
      this.props.forgetPassword({
        password: newPassword,
        email: this.props.email.email
      });
      this.props.navigation.navigate('SignIn');
    }
  }
  render() {
    return (
      <Container
        style={{
          backgroundColor: '#1f3954'
        }}
      >
        <Form
          style={{
            flex: 3,
            marginTop: 50
          }}
        >
          <Item
            floatingLabel
            style={{ marginLeft: 15, marginRight: 15, marginBottom: 10 }}
          >
            <Label
              style={{
                color: '#ffffff',
                fontFamily: 'Helvetica',
                fontSize: 18
              }}
            >
              Verification Code
            </Label>
            <Input
              ref={this.textInput1}
              style={{ color: '#ffffff', flex: 1, fontSize: 16 }}
              onChangeText={text => this.setState({ code: text })}
            />
          </Item>
          {this.state.isOk ? (
            <>
              <Item floatingLabel style={{ marginLeft: 15, marginRight: 15 }}>
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
              <Item
                floatingLabel
                style={{ marginLeft: 15, marginRight: 15, marginBottom: 10 }}
              >
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
            </>
          ) : null}
          <Button
            block
            rounded
            onPress={this.btnHandler}
            success
            style={{
              marginTop: 30,
              marginLeft: 10,
              marginRight: 10
            }}
          >
            <Text
              style={{
                fontFamily: 'Helvetica',
                fontSize: 18
              }}
            >
              Confirm
            </Text>
          </Button>
        </Form>
        <View style={{ flex: 2 }} />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  email: state.email
});
const mapDispatchToProps = { forgetPassword };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgetPasswordScreen);
