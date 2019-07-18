import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

export default class PlanPageTitle extends Component {
  constructor(props) {
    super(props);

    this.routes = ['Exercise', 'Diet'];

    this.state = { btnIndex: 0 }
    this.pressHandler = this.pressHandler.bind(this);
  }

  pressHandler(index) {
    this.setState({btnIndex: index});
    this.props.navigation.navigate(this.routes[index]);
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
        <Button small light disabled={this.state.btnIndex === 0 ? true : false} onPress={() => this.pressHandler(0)}>
          <Text>Exercise</Text>
        </Button>
        <Button small light disabled={this.state.btnIndex === 1 ? true : false} onPress={() => this.pressHandler(1)}>
          <Text>Diet</Text>
        </Button>
      </View>
    )
  }
}
