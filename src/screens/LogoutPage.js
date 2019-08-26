import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Button } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import HeaderComponent from '../components/DrawerHeaderComponent';
import { deviceUnreg, logout } from '../redux/actions';

class LogoutPage extends Component {
  constructor(props) {
    super(props);
    this.logoutHandler = this.logoutHandler.bind(this);
  }
  async logoutHandler() {
    const token = await AsyncStorage.getItem('token');
    this.props.deviceUnreg(token);

    await AsyncStorage.removeItem('token');
    await this.props.logout();

    this.props.navigation.navigate('SignIn');
  }
  render() {
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent titleName="Logout" {...this.props} />
        <Button
          block
          rounded
          danger
          style={{ marginTop: 30, marginLeft: 10, marginRight: 10 }}
          onPress={this.logoutHandler}
        >
          <Text
            style={{
              color: '#ffffff',
              fontFamily: 'Helvetica',
              fontSize: 18
            }}
          >
            Logout
          </Text>
        </Button>
      </Container>
    );
  }
}
const mapStateToProps = state => ({ user: state.users });
const mapDispatchToProps = {
  logout,
  deviceUnreg
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutPage);
