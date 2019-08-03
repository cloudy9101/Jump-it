import React, { Component } from 'react';
import { View, Switch } from 'react-native';
import { Icon, Container, ListItem, List, Text } from 'native-base';
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
          <ListItem style={{ justifyContent: 'space-between' }}>
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
          <ListItem style={{ justifyContent: 'space-between' }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Helvetica',
                color: '#ffffff'
              }}
            >
              Change Password
            </Text>
            <Icon
              name="ios-arrow-forward"
              type="Ionicons"
              style={{
                color: '#ffffff'
              }}
              onPress={() => this.props.navigation.navigate('PasswordChange')}
            />
          </ListItem>
        </List>
      </Container>
    );
  }
}

export default SettingPage;
