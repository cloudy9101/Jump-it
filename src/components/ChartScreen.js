import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { ListItem, View, Text } from 'native-base';
import { BarChart, LineChart } from 'react-native-chart-kit';
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43]
    }
  ]
};
class ChartScreen extends Component {
  render() {
    const colorfrom = this.props.GradientFrom;
    const colorTo = this.props.GradientTo;
    const dividerColor = this.props.dividerColor;
    const width = this.props.width;
    const data = this.props.data || data;
    return (
      <View key={this.props.index}>
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

        <BarChart
          data={data}
          withDots={false}
          withShadow={false}
          withInnerLines={false}
          withOuterLines={false}
          style={{
            marginVertical: 20,
            borderRadius: 2,
            marginTop: 0
          }}
          fromZero={true}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={{
            //backgroundColor: '#3d7ea4',
            backgroundGradientFrom: colorfrom,
            backgroundGradientTo: colorTo,
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            strokeWidth: 1,
            barW: width
          }}
        />
      </View>
    );
  }
}

export default ChartScreen;
