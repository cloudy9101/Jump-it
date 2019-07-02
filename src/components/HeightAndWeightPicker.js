import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import SimplePicker from 'react-native-simple-picker';
export default class HeightAndWeightPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: this.props.value
    };
  }

  render() {
    return (
      <View>
        <Text
          style={{
            color: '#555',
            marginTop: 20,
            marginLeft: -170
          }}
          onPress={() => {
            this.refs.picker.show();
          }}
        >
          {this.state.selectedOption}
        </Text>
        <SimplePicker
          ref={'picker'}
          options={this.props.data}
          initialOptionIndex={35}
          confirmTextStyle={{ color: 'black', fontSize: 15 }}
          cancelTextStyle={{ color: '#666', fontSize: 15 }}
          onSubmit={option => {
            this.setState({
              selectedOption: option
            });
          }}
        />
      </View>
    );
  }
}
