import React, { Component } from 'react';

import { View, Text, Icon, Button } from 'native-base';

class DatechangeComponet extends Component {
  render() {
    const color = this.props.color;
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 5,
          marginBottom: 5
        }}
      >
        <Button light transparent onPress={this.props.backwardHandler}>
          <Icon
            name="angle-left"
            type="FontAwesome"
            style={{ color: '#ffffff' }}
          />
        </Button>

        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Helvetica',
            color: '#fff'
          }}
          onPress={() => this.props.txtPress(true)}
        >
          {this.props.data}
        </Text>

        <Button light transparent onPress={this.props.forwardHandler}>
          <Icon
            name="angle-right"
            type="FontAwesome"
            style={{ color: color }}
            onPress={this.props.forwardHandler}
          />
        </Button>
      </View>
    );
  }
}

export default DatechangeComponet;
