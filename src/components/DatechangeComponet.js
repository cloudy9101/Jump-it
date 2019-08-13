import React, { Component } from 'react';
import { View, Text, Icon } from 'native-base';

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
        <Icon
          name="angle-left"
          type="FontAwesome"
          style={{ color: '#ffffff' }}
          onPress={this.props.backwardHandler}
        />

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

        <Icon
          name="angle-right"
          type="FontAwesome"
          style={{ color: color }}
          onPress={this.props.forwardHandler}
        />
      </View>
    );
  }
}

export default DatechangeComponet;
