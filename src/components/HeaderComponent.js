import React from 'react';
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  PlatForm,
  View
} from 'native-base';
import PlanPageTitle from '../components/PlanPageTitle';
export default (HeaderComponent = props => {
  const left = props.left ||
    <Button transparent light>
      <Icon
        name="menu"
        type="MaterialCommunityIcons"
        style={{ color: 'black' }}
        onPress={() => props.navigation.openDrawer()}
        style={{ color: '#ffffff' }}
      />
    </Button>;
  return (
    <Header style={{ backgroundColor: '#1f3954' }}>
      <Left>
        {left}
      </Left>
      <Body>
        {props.navigation.state.routeName === 'Exercise' ||
        props.navigation.state.routeName === 'Diet' ? (
          <PlanPageTitle navigation={props.navigation} />
        ) : (
          <Title style={{ color: '#ffffff', fontFamily: 'Georgia' }}>
            {props.title}
          </Title>
        )}
      </Body>
      <Right>{props.right}</Right>
    </Header>
  );
});
