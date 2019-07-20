import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem, Text } from 'native-base';
import WorkoutDetailValue from './WorkoutDetailValue';
const WorkoutDetailItem = props => {
  return (
    <ListItem style={{ display: 'flex', justifyContent: 'space-between' }}>
      <WorkoutDetailValue title={props.lTitle} value={props.lValue} />

      <WorkoutDetailValue title={props.rTitle} value={props.rValue} />
    </ListItem>
  );
};

export default WorkoutDetailItem;
