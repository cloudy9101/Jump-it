import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Body, Right, Title, Card, CardItem, Text } from 'native-base';
export default function WorkoutCard(props) {
  return (
    <View
      style={{
        height: 150,
        width: '95%',
        backgroundColor: props.bkColor,
        marginTop: 20,
        borderRadius: 10,
        shadowColor: props.shadowColor,
        shadowOffset: { width: 0.5, height: 1 },
        shadowOpacity: 0.7
      }}
    >
      <TouchableOpacity>
        <View
          style={{
            height: 130,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <View style={{ width: 150 }}>
            <Text
              style={{
                color: '#ffffff',
                fontFamily: 'Helvetica',
                fontSize: 20,
                paddingLeft: 6
              }}
            >
              {props.name}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
            <Text
              style={{ color: '#ffffff', fontFamily: 'Courier', fontSize: 36 }}
            >
              {props.num}
            </Text>
            <Text
              style={{
                color: '#ffffff',
                fontFamily: 'Helvetica',
                fontSize: 16,
                paddingRight: 8
              }}
            >
              {props.unit}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row-reverse' }}>
          <Text
            style={{
              color: '#ffffff',
              fontFamily: 'Helvetica',
              fontSize: 14,
              paddingRight: 8
            }}
          >
            Today: at {props.time}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
