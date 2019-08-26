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
import { sendEmail } from '../redux/actions';

class ForgetPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.forgetPasswordHandler = this.forgetPasswordHandler.bind(this);
  }
  forgetPasswordHandler() {
    const { email } = this.state;
    if (ValidationUtil.isEmpty(email)) {
      Toast.show({
        style: {
          marginTop: 65
        },
        position: 'top',
        text: 'Email Empty',
        buttonText: 'Cancel',
        type: 'danger',
        duration: 2000
      });
      return;
    }

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
      return;
    }

    this.props.sendEmail({ email });

    Toast.show({
      style: {
        marginTop: 65
      },
      position: 'top',
      text: 'Email sent to your box to check code.',
      buttonText: 'Cancel',
      type: 'danger',
      duration: 3000
    });
    setTimeout(() => {
      this.props.navigation.navigate('Verify');
    }, 500);
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
              Email
            </Label>
            <Input
              ref={this.textInput1}
              style={{ color: '#ffffff', flex: 1, fontSize: 16 }}
              onChangeText={text => this.setState({ email: text })}
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
const mapDispatchToProps = { sendEmail };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgetPasswordScreen);
