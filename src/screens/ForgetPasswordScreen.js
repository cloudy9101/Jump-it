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
  Toast
} from 'native-base';
import ValidationUtil from '../utils/ValidationUtil';
class ForgetPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      code: ''
    };
    this.forgetPasswordHandler = this.forgetPasswordHandler.bind(this);
  }
  forgetPasswordHandler() {
    const { email, code } = this.state;
    if (!ValidationUtil.isEmail(email)) {
      Toast.show({
        style: {
          marginTop: 65
        },
        position: 'top',
        text: 'Email Format Wrong..',
        buttonText: 'Cancel',
        type: 'danger',
        duration: 2000
      });
    }
    //this.props.navigation.navigate('Change');
  }
  render() {
    return (
      <Container
        style={{
          backgroundColor: '#1f3954'
        }}
      >
        <View
          style={{
            flex: 3,
            marginTop: 50
          }}
        >
          <Item
            floatingLabel
            style={{ marginLeft: 15, marginRight: 15, marginBottom: 20 }}
          >
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
            floatingLabel
            style={{ marginLeft: 15, marginRight: 15, marginBottom: 20 }}
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
          <Button
            block
            rounded
            // bordered
            onPress={this.forgetPasswordHandler}
            success
            style={{
              marginTop: 30,
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
              Next
            </Text>
          </Button>
        </View>
        <View style={{ flex: 2 }} />
      </Container>
    );
  }
}

export default ForgetPasswordScreen;
