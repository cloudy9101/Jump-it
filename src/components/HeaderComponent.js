import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import PlanPageTitle from '../components/PlanPageTitle';
export default (HeaderComponent = props => {
  console.log();
  return (
    <Header style={{ backgroundColor: '#1f3954' }}>
      <Left>
        <Button transparent light>
          <Icon
            name="menu"
            type="MaterialCommunityIcons"
            style={{ color: 'black' }}
            onPress={() => props.navigation.openDrawer()}
            style={{ color: '#fff' }}
          />
        </Button>
      </Left>
      <Body>
        {props.navigation.state.routeName === 'Exercise' ||
        props.navigation.state.routeName === 'Diet' ? (
          <PlanPageTitle navigation={props.navigation} />
        ) : (
          <Title style={{ color: '#fff', fontFamily: 'Georgia' }}>
            {' '}
            {props.title}
          </Title>
        )}
      </Body>
      <Right />
    </Header>
  );
});
