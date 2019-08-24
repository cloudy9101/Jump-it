import React, { Component } from 'react';
import { View, Switch } from 'react-native';
import { Icon, Container, ListItem, List, Text, Button } from 'native-base';
import HeaderComponent from '../components/DrawerHeaderComponent';
export class SettingPage extends Component {
  constructor(props) {
    super(props);

    this.toggleSwitch = this.toggleSwitch.bind(this);
  }
  toggleSwitch() {}
  render() {
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent titleName="Setting" {...this.props} />
        <List>
          <ListItem
            style={{
              justifyContent: 'space-between',
              marginLeft: 15,
              marginRight: 15
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Helvetica',
                color: '#ffffff'
              }}
            >
              Profile
            </Text>
            <Icon
              name="ios-arrow-forward"
              type="Ionicons"
              style={{
                color: '#ffffff'
              }}
              onPress={() => this.props.navigation.navigate('Profile')}
            />
          </ListItem>
          <ListItem
            style={{
              justifyContent: 'space-between',
              marginLeft: 15,
              marginRight: 15
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Helvetica',
                color: '#ffffff'
              }}
            >
              Change Password
            </Text>
            {/* <Button
              light
              transparent
              onPress={() => this.props.navigation.navigate('Profile')}
            > */}
            <Icon
              name="ios-arrow-forward"
              type="Ionicons"
              style={{
                color: '#ffffff'
              }}
              onPress={() => this.props.navigation.navigate('PasswordChange')}
            />
          </ListItem>
          <ListItem
            style={{
              justifyContent: 'space-between',
              marginLeft: 15,
              marginRight: 15
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Helvetica',
                color: '#ffffff'
              }}
            >
              Notification
            </Text>
            <Switch onValueChange={this.toggleSwitch} />
          </ListItem>
        </List>
      </Container>
    );
  }
}

export default SettingPage;
