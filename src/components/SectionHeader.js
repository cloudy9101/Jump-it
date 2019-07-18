import React, * as react from 'react';
import { View } from 'react-native';
import { ListItem, Left, Right, Text, Icon, Thumbnail } from 'native-base';
export default class SectionSectionHeaderList extends react.Component {
  render() {
    return (
      <ListItem itemDivider style={{ backgroundColor: '#f5a742' }}>
        <Left>
          <Text style={{ color: '#292828', fontSize: 18, fontWeight: 'bold' }}>
            {this.props.workDate}
          </Text>
        </Left>
        <Right>
          <View style={{ marginLeft: -50 }}>
            <Text
              style={{
                color: '#292828',
                fontSize: 18,
                fontWeight: 'bold'
              }}
            >
              {this.props.workCounts}Workouts
            </Text>
          </View>
        </Right>
      </ListItem>
    );
  }
}
