import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { DrawerItems } from 'react-navigation';
import { Container, Thumbnail, Text, Content, Header, Body } from 'native-base';

class DrawerItemsComponent extends Component {
  render() {
    //console.log(this.props.users);
    return (
      <Container>
        <Header style={styles.headerStyle}>
          <Body>
            <Thumbnail large source={require('../../assets/images.png')} />
            <Text
              style={{
                color: '#ffffff',
                fontFamily: 'Helvetica',
                fontSize: 18,
                paddingTop: 10
              }}
            >
              {this.props.users.username}
            </Text>
          </Body>
        </Header>
        <Content contentContainerStyle={styles.contentStyle}>
          <DrawerItems {...this.props} />
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  contentStyle: {
    flex: 1
  },
  headerStyle: {
    height: 180,
    backgroundColor: '#1f3954'
  }
});
const mapStateToProps = state => ({
  users: state.users
});
export default connect(mapStateToProps)(DrawerItemsComponent);
