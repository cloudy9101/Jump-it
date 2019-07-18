import React, * as react from 'react';
import { View } from 'react-native';
import { ListItem, Left, Right, Text, Icon, Thumbnail } from 'native-base';
export default class SectionList extends react.Component {
  render() {
    return (
      <>
        <ListItem
          itemDivider
          style={{ backgroundColor: '#121111', opacity: 0.8 }}
        >
          <Left>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
              {this.props.workDate}
            </Text>
          </Left>
          <Right>
            <View style={{ marginLeft: -50 }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: 'bold'
                }}
              >
                {this.props.workCounts}Workouts
              </Text>
            </View>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Thumbnail
              source={require('../../assets/run.png')}
              style={{
                marginTop: -5,
                marginRight: 10
              }}
            />
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
                  {this.props.duration}
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
      </>
    );
  }
}
