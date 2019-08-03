import React from 'react';

import { Segment, Button, Text } from 'native-base';
export default function ButtonGroup(props) {
  return (
    <Segment style={{ marginTop: 5 }}>
      <Button
        small
        light
        bordered
        style={{
          width: 95,
          //marginRight: -1,
          borderRadius: 0,
          backgroundColor: '#315574',
          justifyContent: 'center'
        }}
      >
        <Text style={{ fontFamily: 'Georgia', fontSize: 16 }}>W</Text>
      </Button>
      <Button
        small
        light
        bordered
        style={{
          width: 95,
          //marginRight: -1,
          borderRadius: 0,
          backgroundColor: '#315574',
          justifyContent: 'center'
        }}
      >
        <Text style={{ fontFamily: 'Georgia', fontSize: 16 }}>M</Text>
      </Button>
      <Button
        small
        light
        bordered
        style={{
          width: 95,
          //marginRight: -1,
          borderRadius: 0,
          backgroundColor: '#315574',
          justifyContent: 'center'
        }}
      >
        <Text style={{ fontFamily: 'Georgia', fontSize: 16 }}>Y</Text>
      </Button>
    </Segment>
  );
}
