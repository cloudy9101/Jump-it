import React from 'react';
import { Title, Header, Body, Left, Right, Button } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default (HeaderComponent = props => {
  const { navigation } = props;
  return (
    <Header style={{ backgroundColor: '#f5a742' }}>
      <Left>
        <Ionicons
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          size={30}
        />
      </Left>
      <Body>
        <Title>{props.titleName}</Title>
      </Body>
      <Right />
    </Header>
  );
});
