import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {
  Container,
  View,
  Content,
  Text,
  Button,
  Icon,
  Fab,
  Tab,
  Tabs,
  TabHeading
} from 'native-base';
import ChartComponent from './ChartScreen';
import HeaderComponent from '../components/HeaderComponent';
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [500, 45, 28, 80, 1000, 43]
    }
  ]
};
export default class MeasurementPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent title={'Measure'} {...this.props} />
        <Tabs tabBarUnderlineStyle={{ backgroundColor: '#eee', height: 1 }}>
          <Tab
            style={{ backgroundColor: '#1f3954' }}
            heading={
              <TabHeading
                style={{
                  backgroundColor: '#1f3954'
                }}
                activeTabStyle={{ borderBottomColor: 'red' }}
              >
                <Text
                  style={{
                    color: '#ffffff',
                    fontFamily: 'Georgia',
                    fontSize: 16
                  }}
                >
                  Week
                </Text>
              </TabHeading>
            }
          >
            <Content>
              <ChartComponent
                name="High Blood Pressure"
                GradientFrom="#DD5144"
                GradientTo="#a82216"
                data={data}
              />
              <ChartComponent
                name="Sugar Taken"
                GradientFrom="#b38b27"
                GradientTo="#946d0d"
                data={data}
              />
              <ChartComponent
                name="Steps"
                GradientFrom="#6e61a8"
                GradientTo="#453687"
                data={data}
              />
              <ChartComponent
                name="Working+Running Distance"
                GradientFrom="#35652c"
                GradientTo="#163d0f"
                data={data}
              />
            </Content>
          </Tab>
          <Tab
            style={{ backgroundColor: '#1f3954' }}
            heading={
              <TabHeading
                style={{ backgroundColor: '#1f3954', color: '#ffffff' }}
                activeTabStyle={{ color: 'color' }}
              >
                <Text
                  style={{
                    color: '#ffffff',
                    fontFamily: 'Georgia',
                    fontSize: 16
                  }}
                >
                  Month
                </Text>
              </TabHeading>
            }
          >
            <Content>
              <ChartComponent
                name="High Blood Pressure"
                GradientFrom="#DD5144"
                GradientTo="#a82216"
                data={data}
              />
              <ChartComponent
                name="Sugar Taken"
                GradientFrom="#b38b27"
                GradientTo="#946d0d"
                data={data}
              />
              <ChartComponent
                name="Steps"
                GradientFrom="#6e61a8"
                GradientTo="#453687"
                data={data}
              />
              <ChartComponent
                name="Working+Running Distance"
                GradientFrom="#35652c"
                GradientTo="#163d0f"
                data={data}
              />
            </Content>
          </Tab>
          <Tab
            style={{ backgroundColor: '#1f3954' }}
            heading={
              <TabHeading
                style={{ backgroundColor: '#1f3954', color: '#ffffff' }}
              >
                <Text
                  style={{
                    color: '#ffffff',
                    fontFamily: 'Georgia',
                    fontSize: 16
                  }}
                >
                  Year
                </Text>
              </TabHeading>
            }
          >
            <Content>
              <ChartComponent
                name="High Blood Pressure"
                GradientFrom="#DD5144"
                GradientTo="#a82216"
                data={data}
              />
              <ChartComponent
                name="Sugar Taken"
                GradientFrom="#b38b27"
                GradientTo="#946d0d"
                data={data}
              />
              <ChartComponent
                name="Steps"
                GradientFrom="#6e61a8"
                GradientTo="#453687"
                data={data}
              />
              <ChartComponent
                name="Working+Running Distance"
                GradientFrom="#35652c"
                GradientTo="#163d0f"
                data={data}
              />
            </Content>
          </Tab>
        </Tabs>

        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{
            backgroundColor: '#3d7ea4',
            width: 45,
            height: 45
          }}
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="pencil" type="FontAwesome" />

          <Button style={{ backgroundColor: '#2c6439' }}>
            <Icon name="coffee" type="FontAwesome" />
          </Button>
          <Button style={{ backgroundColor: '#DD5144' }}>
            <Icon name="heart" />
          </Button>
        </Fab>
      </Container>
    );
  }
}
