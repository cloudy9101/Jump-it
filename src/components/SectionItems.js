import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Right,
  Text,
  Icon,
  Thumbnail,
  Button
} from 'native-base';
export default class SectionItems extends Component {
  render() {
    return (
      <ListItem>
        <Left>
          {/* <Thumbnail
            source={require('../../assets/run.png')}
            style={{
              
            }}
          /> */}
          <View
            style={{
              backgroundColor: '#f5a742',
              marginRight: 5,
              borderRadius: 60,
              height: 40,
              width: 40,

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.7,
              shadowRadius: 2
            }}
          >
            <Icon
              name="running"
              type="FontAwesome5"
              style={{
                fontSize: 20,
                color: '#ffffff'
              }}
            />
          </View>

          <View style={{ display: 'flex', flexDirection: 'column' }}>
            <View>
              <Text
                style={{
                  color: '#292828',
                  fontSize: 18,
                  fontWeight: 'bold'
                }}
              >
                {this.props.name}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: '#99952c',
                  fontSize: 18,
                  fontWeight: 'bold'
                }}
              >
                {this.props.frequency}
              </Text>
            </View>
          </View>
        </Left>
        <Right style={{ flexDirection: 'row' }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: -22
            }}
          >
            <View style={{ marginRight: 5 }}>
              <Text
                style={{
                  color: '#99952c',
                  fontSize: 15,
                  fontWeight: 'bold'
                }}
              >
                {this.props.workDate}
              </Text>
            </View>
            <View style={{ marginTop: -3 }}>
              <Icon name="arrow-forward" style={{ color: '#292828' }} />
            </View>
          </View>
        </Right>
      </ListItem>
    );
  }
}
