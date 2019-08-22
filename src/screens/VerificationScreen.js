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

class ForgetPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
    this.btnHandler = this.btnHandler.bind(this);
  }
  btnHandler() {
    const { code } = this.state;
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
    if (code == this.props.email.code) {
      this.props.navigation.navigate('Change');
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
            onPress={this.btnHandler}
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
                fontFamily: 'Helvetica',
                fontSize: 18
              }}
            >
              Next
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

export default connect(mapStateToProps)(ForgetPasswordScreen);
