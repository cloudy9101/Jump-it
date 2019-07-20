import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

const WorkoutDetailValue = props => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginBottom: 5
        }}
      >
        {props.title}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'red'
        }}
      >
        {props.value}
      </Text>
    </View>
  );
};
export default WorkoutDetailValue;
