import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Thumbnail, Text } from 'native-base';
import HeaderComponent from '../components/HeaderComponent';
class AboutPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent title={'About'} {...this.props} />

        <View
          style={{
            flex: 1.5,
            backgroundColor: '#315574',
            shadowColor: '#315574',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2
          }}
        >
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Thumbnail
              large
              source={require('../../assets/jump.png')}
              style={{ width: 170, height: 170 }}
            />

            <Text
              style={{
                color: '#ffffff',
                fontFamily: 'Helvetica',
                fontSize: 19
              }}
            >
              Version 0.0.1 #Build 2019
            </Text>
          </View>
        </View>
        <View style={{ flex: 2.5 }} />
      </Container>
    );
  }
}

export default AboutPage;
