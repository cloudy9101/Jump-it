import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { updateNotificationEnabled } from '../redux/actions';
import { View, Switch } from 'react-native';
import { Icon, Container, ListItem, List, Text, Button } from 'native-base';
import HeaderComponent from '../components/DrawerHeaderComponent';
class SettingPage extends Component {
  constructor(props) {
    super(props);

    this.state = { notificationEnabled: props.users.notificationEnabled };
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }
  toggleSwitch(value) {
    AsyncStorage.getItem('token').then(token => {
      this.props.updateNotificationEnabled(value, token);
    });
    this.setState({ notificationEnabled: value });
  }
  render() {
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent titleName="Setting" {...this.props} />
        <List>
          <ListItem
            underlayColor="#2a4766"
            style={{
              justifyContent: 'space-between',
              marginLeft: 15,
              marginRight: 15
            }}
            onPress={() => this.props.navigation.navigate('Profile')}
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
            />
          </ListItem>
          <ListItem
            underlayColor="#2a4766"
            style={{
              justifyContent: 'space-between',
              marginLeft: 15,
              marginRight: 15
            }}
            onPress={() => this.props.navigation.navigate('PasswordChange')}
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

            <Icon
              name="ios-arrow-forward"
              type="Ionicons"
              style={{
                color: '#ffffff'
              }}
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
            <Switch
              onValueChange={this.toggleSwitch}
              value={this.state.notificationEnabled}
            />
          </ListItem>
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});
const mapDispatchToProps = { updateNotificationEnabled };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingPage);
