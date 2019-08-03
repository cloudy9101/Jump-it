import React from 'react';
import { StyleSheet } from 'react-native';
import { DrawerItems } from 'react-navigation';
import { Container, Thumbnail, Text, Content, Header, Body } from 'native-base';

export default (DrawerItemsComponent = props => {
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
            SpiderMan
          </Text>
        </Body>
      </Header>
      <Content contentContainerStyle={styles.contentStyle}>
        <DrawerItems {...props} />
      </Content>
    </Container>
  );
});
const styles = StyleSheet.create({
  contentStyle: {
    flex: 1
  },
  headerStyle: {
    height: 180,
    backgroundColor: '#1f3954'
  }
});
