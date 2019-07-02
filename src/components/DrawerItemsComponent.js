import React from 'react';
import { StyleSheet } from 'react-native';
import { DrawerItems } from 'react-navigation';
import { Container, Thumbnail, Text, Content, Header, Body } from 'native-base';

export default (DrawerItemsComponent = props => {
  return (
    <Container>
      <Header style={styles.headerStyle}>
        <Body>
          <Thumbnail large source={require('../../assets/download.jpeg')} />
          <Text>SpiderMan</Text>
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
    backgroundColor: '#f5a742'
  }
});
