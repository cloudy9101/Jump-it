import React from 'react';
import { View, Text, Icon } from 'native-base';
export default function DatechangeComponet(props) {
  const color = props.color;
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
        onPress={props.backwardHandler}
      />

      <Text
        style={{
          fontSize: 18,
          fontFamily: 'Helvetica',
          color: '#fff'
        }}
      >
        {props.data}
      </Text>

      <Icon
        name="angle-right"
        type="FontAwesome"
        style={{ color: color }}
        onPress={props.forwardHandler}
      />
    </View>
  );
}
