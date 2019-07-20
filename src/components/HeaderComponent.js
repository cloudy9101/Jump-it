import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default (HeaderComponent = props => {
  return (
    <Header style={{ backgroundColor: '#f5a742' }}>
      <Left>
        <Button transparent light>
          <Icon
            name="menu"
            type="MaterialCommunityIcons"
            style={{ color: 'black' }}
            onPress={() => props.navigation.openDrawer()}
          />
        </Button>
      </Left>
      <Body>
        <Title>{props.title}</Title>
      </Body>
      <Right />
    </Header>
  );
});
