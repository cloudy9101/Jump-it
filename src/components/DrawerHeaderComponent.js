import React from 'react';
import { Title, Header, Body, Left, Right, Button } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default (DrawerHeaderComponent = props => {
  const { navigation } = props;
  return (
    <Header style={{ backgroundColor: '#1f3954' }}>
      <Left>
        <Ionicons
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          size={30}
          style={{ color: '#fff' }}
        />
      </Left>
      <Body>
        <Title style={{ color: '#fff', fontFamily: 'Georgia' }}>
          {props.titleName}
        </Title>
      </Body>
      <Right />
    </Header>
  );
});
