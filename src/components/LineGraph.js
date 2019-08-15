import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { ListItem, View, Text } from 'native-base';
import { BarChart, LineChart } from 'react-native-chart-kit';

class LineGraph extends Component {
  render() {
    const colorfrom = this.props.GradientFrom;
    const colorTo = this.props.GradientTo;
    const dividerColor = this.props.dividerColor;
    return (
      <View>
        <ListItem
          itemDivider
          style={{ backgroundColor: dividerColor || '#315574' }}
        >
          <Text
            style={{
              color: '#ffffff',
              fontFamily: 'Georgia',
              fontSize: 18
            }}
          >
            {this.props.name}
          </Text>
        </ListItem>
        <LineChart
          data={this.props.data}
          width={Dimensions.get('window').width}
          style={{
            marginVertical: 20,
            borderRadius: 2,
            marginTop: 0
          }}
          height={220}
          chartConfig={{
            //backgroundColor: '#3d7ea4',
            backgroundGradientFrom: colorfrom,
            backgroundGradientTo: colorTo,
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            strokeWidth: 3
          }}
        />
      </View>
    );
  }
}

export default LineGraph;
