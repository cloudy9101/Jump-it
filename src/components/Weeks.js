import React from 'react';
import { View, Text, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;

const WEEKS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export default ({ isChinese }) => {
  return (
    <View
      style={{
        width,
        height: 20,
        flexDirection: 'row'
      }}
    >
      {WEEKS.map(day => (
        <View
          style={{
            flex: 1,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          key={day}
        >
          <Text
            style={{
              color: '#ffffff',
              fontSize: 16
            }}
          >
            {day}
          </Text>
        </View>
      ))}
    </View>
  );
};
