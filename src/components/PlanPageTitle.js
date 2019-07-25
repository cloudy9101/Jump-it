import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

export default class PlanPageTitle extends Component {
  constructor(props) {
    super(props);

    this.routes = ['Exercise', 'Diet'];

    this.state = { btnIndex: 0 };
    this.pressHandler = this.pressHandler.bind(this);
  }

  pressHandler(index) {
    this.setState({ btnIndex: index });
    this.props.navigation.navigate(this.routes[index]);
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
        <Button
          small
          light
          bordered
          first
          active
          style={{
            width: 85,
            fontSize: 18,
            borderRadius: 0,
            backgroundColor: '#315574',
            borderRightWidth: 0
          }}
          // disabled={this.state.btnIndex === 0 ? true : false}
          onPress={() => this.pressHandler(0)}
        >
          <Text style={{ fontFamily: 'Georgia', fontSize: 16 }}>Exercise</Text>
        </Button>
        <Button
          small
          light
          bordered
          last
          style={{
            width: 85,
            //marginRight: -1,
            borderRadius: 0,
            backgroundColor: '#315574'
          }}
          //disabled={this.state.btnIndex === 1 ? true : false}
          onPress={() => this.pressHandler(1)}
        >
          <Text
            style={{
              paddingLeft: 30,
              fontFamily: 'Georgia',
              fontSize: 16
            }}
          >
            Diet
          </Text>
        </Button>
      </View>
    );
  }
}
