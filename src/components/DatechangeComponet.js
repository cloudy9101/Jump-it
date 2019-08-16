import React, { Component } from 'react';
<<<<<<< HEAD
import { View, Text, Icon, Button } from 'native-base';
=======
import { View, Text, Icon } from 'native-base';
>>>>>>> 9cc202ac13d8276061f0b6fed77ddf5a4c5c70a4

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
<<<<<<< HEAD
        <Button light transparent onPress={this.props.backwardHandler}>
          <Icon
            name="angle-left"
            type="FontAwesome"
            style={{ color: '#ffffff' }}
          />
        </Button>
=======
        <Icon
          name="angle-left"
          type="FontAwesome"
          style={{ color: '#ffffff' }}
          onPress={this.props.backwardHandler}
        />

>>>>>>> 9cc202ac13d8276061f0b6fed77ddf5a4c5c70a4
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
<<<<<<< HEAD
        <Button light transparent onPress={this.props.forwardHandler}>
          <Icon
            name="angle-right"
            type="FontAwesome"
            style={{ color: color }}
            onPress={this.props.forwardHandler}
          />
        </Button>
=======

        <Icon
          name="angle-right"
          type="FontAwesome"
          style={{ color: color }}
          onPress={this.props.forwardHandler}
        />
>>>>>>> 9cc202ac13d8276061f0b6fed77ddf5a4c5c70a4
      </View>
    );
  }
}

export default DatechangeComponet;
