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
  Content
} from 'native-base';
import KeyboardShift from '../components/KeyboardShift';
export class SignInPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <KeyboardShift>
        {() => (
          <Container style={styles.containerStyle}>
            {/* <Content> */}
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
                <Input />
              </Item>

              <Item inlineLabel last style={{ margin: 10 }}>
                <Label>Password</Label>
                <Input secureTextEntry={true} />
              </Item>

              <View style={styles.buttonStyle}>
                <Button
                  bordered
                  onPress={() => {
                    navigation.navigate('SignUp');
                  }}
                  light
                >
                  <Text>Sign Up</Text>
                </Button>

                <Button
                  bordered
                  onPress={() => {
                    navigation.navigate('home');
                  }}
                  light
                >
                  <Text>Sign In</Text>
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

export default SignInPage;
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
