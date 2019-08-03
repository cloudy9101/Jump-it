import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { ListItem, View, Text } from 'native-base';
import { BarChart, LineChart } from 'react-native-chart-kit';

class ChartScreen extends Component {
  render() {
    const colorfrom = this.props.GradientFrom;
    const colorTo = this.props.GradientTo;
    const dividerColor = this.props.dividerColor;
    return (
      <View>
        <ListItem itemDivider style={{ backgroundColor: '#315574' }}>
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

        <BarChart
          data={this.props.data}
          bezier
          style={{
            marginVertical: 20,
            borderRadius: 2
          }}
          fromZero={true}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={{
            //backgroundColor: '#3d7ea4',
            backgroundGradientFrom: colorfrom,
            backgroundGradientTo: colorTo,
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(238, 238, 238 ,${opacity})`
          }}
        />
      </View>
    );
  }
}

export default ChartScreen;
