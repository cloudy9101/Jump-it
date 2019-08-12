import React, { Component } from 'react';
import Modal from "react-native-modal";
import { Text, View } from 'react-native';
import { Form, Item, Input, Card, CardItem, Button } from 'native-base';

export default class FoodFormModal extends Component {
  render() {
    return (
      <View>
        <Modal isVisible={this.props.visible}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ width: "80%" }}>
              <CardItem>
                <Form style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                  <Item>
                    <Input placeholder="Username" />
                  </Item>
                  <Item last>
                    <Input placeholder="Password" />
                  </Item>
                  <Item>
                    <Button onPress={this.props.toggleModal}>
                      <Text>Hide model</Text>
                    </Button>
                  </Item>
                </Form>
              </CardItem>
            </Card>
          </View>
        </Modal>
      </View>
    )
  }
}
