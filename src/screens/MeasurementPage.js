import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {
  Container,
  View,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Fab,
  Tab,
  Tabs,
  TabHeading
} from 'native-base';
import moment from 'moment';
import ChartScreen from './ChartScreen';
import HeaderComponent from '../components/HeaderComponent';
import MeasureModal from '../components/MeasureModal';
import DateUtils from '../utils/DateUtils';
import DatechangeComponet from '../components/DatechangeComponet';
import CalendarModal from '../components/CalendarModal';
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
      isVisible: false,
      date: moment(),
      color: '#222',
      isCalenderVisible: false
    };

    this.modelhandler = this.modelhandler.bind(this);
    this.backwardHandler = this.backwardHandler.bind(this);
    this.forwardHandler = this.forwardHandler.bind(this);
    this.canlanderModalHandler = this.canlanderModalHandler.bind(this);
  }

  canlanderModalHandler(e) {
    console.log(e);
    this.setState({
      isCalenderVisible: e
    });
  }
  backwardHandler(e) {
    const { date } = this.state;
    switch (e) {
      case 'WEEK': {
        const value = date.subtract(7, 'days');
        this.setState({
          date: value,
          color: '#fff'
        });
        break;
      }
      case 'MONTH': {
        const value = date.subtract(1, 'months');
        this.setState({
          date: value,
          color: '#fff'
        });
      }
      case 'YEAR': {
        const value = date.subtract(1, 'years');
        this.setState({
          date: value,
          color: '#fff'
        });
        break;
      }
    }
  }
  forwardHandler(e) {
    const { date } = this.state;
    const current = new Date();
    switch (e) {
      case 'WEEK': {
        if (date.toDate() < current) {
          const value = date.add(7, 'days');
          this.setState({
            date: value,
            color: '#fff'
          });
        } else {
          this.setState({
            color: '#222'
          });
        }

        break;
      }
      case 'MONTH': {
        if (date.toDate().getMonth() < current.getMonth()) {
          const value = date.add(1, 'months');
          this.setState({
            date: value,
            color: '#fff'
          });
        } else {
          this.setState({
            color: '#222'
          });
        }
      }
      case 'YEAR': {
        if (date.toDate().getFullYear() < current.getFullYear()) {
          const value = date.add(1, 'years');
          this.setState({
            date: value,
            color: '#fff'
          });
        } else {
          this.setState({
            color: '#222'
          });
        }
      }
    }
  }
  modelhandler() {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }
  render() {
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent title={'Measure'} {...this.props} />
        <Tabs tabBarUnderlineStyle={{ backgroundColor: '#bbb', height: 1 }}>
          <Tab
            style={{ backgroundColor: '#1f3954' }}
            heading={
              <TabHeading
                style={{
                  backgroundColor: '#1f3954'
                }}
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
            <DatechangeComponet
              data={DateUtils.showWeek(this.state.date)}
              color={this.state.color}
              backwardHandler={() => this.backwardHandler('WEEK')}
              forwardHandler={() => this.forwardHandler('WEEK')}
              txtPress={this.canlanderModalHandler}
            />
            <Content style={{ marginTop: 1 }}>
              <ChartScreen
                dividerColor="#DD5144"
                name="High Blood Pressure"
                GradientFrom="#DD5144"
                GradientTo="#a82216"
                data={data}
              />
              <ChartScreen
                dividerColor="#b38b27"
                name="Sugar Taken"
                GradientFrom="#b38b27"
                GradientTo="#946d0d"
                data={data}
              />
              <ChartScreen
                name="Steps"
                dividerColor="#6e61a8"
                GradientFrom="#6e61a8"
                GradientTo="#453687"
                data={data}
              />
              <ChartScreen
                dividerColor="#35652c"
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
            <DatechangeComponet
              data={DateUtils.showMonth(this.state.date)}
              color={this.state.color}
              backwardHandler={() => this.backwardHandler('MONTH')}
              forwardHandler={() => this.forwardHandler('MONTH')}
            />
            <Content>
              <ChartScreen
                dividerColor="#DD5144"
                name="High Blood Pressure"
                GradientFrom="#DD5144"
                GradientTo="#a82216"
                data={data}
              />
              <ChartScreen
                dividerColor="#b38b27"
                name="Sugar Taken"
                GradientFrom="#b38b27"
                GradientTo="#946d0d"
                data={data}
              />
              <ChartScreen
                name="Steps"
                dividerColor="#6e61a8"
                GradientFrom="#6e61a8"
                GradientTo="#453687"
                data={data}
              />
              <ChartScreen
                dividerColor="#35652c"
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
            <DatechangeComponet
              data={DateUtils.showYear(this.state.date)}
              color={this.state.color}
              backwardHandler={() => this.backwardHandler('YEAR')}
              forwardHandler={() => this.forwardHandler('YEAR')}
            />
            <Content>
              <ChartScreen
                dividerColor="#DD5144"
                name="High Blood Pressure"
                GradientFrom="#DD5144"
                GradientTo="#a82216"
                data={data}
              />
              <ChartScreen
                dividerColor="#b38b27"
                name="Sugar Taken"
                GradientFrom="#b38b27"
                GradientTo="#946d0d"
                data={data}
              />
              <ChartScreen
                name="Steps"
                dividerColor="#6e61a8"
                GradientFrom="#6e61a8"
                GradientTo="#453687"
                data={data}
              />
              <ChartScreen
                dividerColor="#35652c"
                name="Working+Running Distance"
                GradientFrom="#35652c"
                GradientTo="#163d0f"
                data={data}
              />
            </Content>
          </Tab>
        </Tabs>
        <CalendarModal
          isCalenderVisible={this.state.isCalenderVisible}
          close={this.canlanderModalHandler}
        />
        <Fab
          direction="up"
          containerStyle={{}}
          style={{
            backgroundColor: '#3d7ea4',
            width: 50,
            height: 50,
            opacity: 0.8
          }}
          onPress={this.modelhandler}
        >
          <Icon name="pencil" type="FontAwesome" />
        </Fab>
        <MeasureModal
          isVisible={this.state.isVisible}
          modalHandler={this.modelhandler}
        />
      </Container>
    );
  }
}
