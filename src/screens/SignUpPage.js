import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Container,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Content
} from 'native-base';
import KeyboardShift from '../components/KeyboardShift';
export default class SignUpPage extends Component {
  render() {
    return (
      <KeyboardShift>
        {() => (
          <Container>
            {/* <Content> */}
            <Form style={{ marginTop: 80 }}>
              <Item stackedLabel style={{ margin: 10 }}>
                <Label>Email</Label>
                <Input />
              </Item>
              <Item stackedLabel style={{ margin: 10 }}>
                <Label>User Name</Label>
                <Input />
              </Item>
              <Item stackedLabel style={{ margin: 10 }}>
                <Label>Password</Label>
                <Input secureTextEntry={true} />
              </Item>
              <Item stackedLabel last style={{ margin: 10 }}>
                <Label>Repassword</Label>
                <Input secureTextEntry={true} />
              </Item>
              <View style={{ marginTop: 40, marginLeft: 10, marginRight: 10 }}>
                <Button
                  block
                  rounded
                  bordered
                  warning
                  onPress={() => this.props.navigation.navigate('SignUp1')}
                >
                  <Text>Next</Text>
                </Button>
              </View>
            </Form>
            {/* </Content> */}
          </Container>
        )}
      </KeyboardShift>
    );
  }
}
