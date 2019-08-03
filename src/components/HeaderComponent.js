import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import PlanPageTitle from '../components/PlanPageTitle';
export default (HeaderComponent = props => {
  console.log(props.navigation);
  return (
    <Header style={{ backgroundColor: '#1f3954' }}>
      <Left>
        <Button transparent light>
          <Icon
            name="menu"
            type="MaterialCommunityIcons"
            style={{ color: 'black' }}
            onPress={() => props.navigation.openDrawer()}
            style={{ color: '#ffffff' }}
          />
        </Button>
      </Left>
      <Body>
        {props.navigation.state.routeName === 'Exercise' ||
        props.navigation.state.routeName === 'Diet' ? (
          <PlanPageTitle navigation={props.navigation} />
        ) : (
          <Title style={{ color: '#ffffff', fontFamily: 'Georgia' }}>
            {' '}
            {props.title}
          </Title>
        )}
      </Body>
      <Right>
        {props.navigation.state.routeName === 'Profile' ? (
          <Button>
            <Text style={{ color: '#ffffff', fontFamily: 'Georgia' }}>
              Save
            </Text>
          </Button>
        ) : null}
      </Right>
    </Header>
  );
});
