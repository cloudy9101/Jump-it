import React, { Component } from 'react';
import {
  Container,
  Text,
  Form,
  Item,
  Label,
  Input,
  Icon,
  Button
} from 'native-base';
class PasswordChangePage extends Component {
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
            <Input style={{ flex: 1, fontSize: 16, color: '#ffffff' }} />
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
              style={{ flex: 1, fontSize: 16, color: '#ffffff' }}
              secureTextEntry={true}
            />
          </Item>
          <Button
            block
            rounded
            // bordered
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
              Conform
            </Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

export default PasswordChangePage;
