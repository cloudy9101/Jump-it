import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Text,
  Icon,
  Thumbnail,
  Header,
  Body,
  Right,
  Button
} from 'native-base';
import CalendarStrip from 'react-native-calendar-strip';
import HeaderComponent from '../components/HeaderComponent';
import { mockData } from '../commons/MockData';
import WorkoutCard from '../components/WorkoutCard';
import moment from 'moment';
import { initHeathKit, Data } from '../utils/AppleHealthUtil';

Platform.OS === 'ios' ? initHeathKit() : null;

class WorkoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isToday: true
    };

    this.dateSelected = this.dateSelected.bind(this);
  }
  dateSelected(date) {
    const newDate = date.toDate();
    const today = new Date();
    if (newDate > today) {
      this.setState({
        isToday: false
      });
      return;
    }
    this.setState({ date: newDate, isToday: true });
    // AsyncStorage.getItem('token').then(token => {
    //   this.props.fetchExercises(newDate, token);
    // });
  }
  renderNodata() {
    return (
      <View style={{ marginTop: 30 }}>
        <Text
          style={{
            color: '#ffffff',
            fontFamily: 'Verdana',
            fontSize: 35,
            paddingLeft: 15
          }}
        >
          No data
        </Text>
      </View>
    );
  }
  renderData() {
    return (
      <>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: '#ffffff',
              fontFamily: 'Verdana',
              fontSize: 22,
              paddingLeft: 8
            }}
          >
            Activity
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <WorkoutCard
            bkColor={'#35652c'}
            name={'Working+Running Distance'}
            num={
              Data.distance
                ? (parseInt(Data.distance.value) / 1000).toFixed(1)
                : '5.8'
            }
            unit={'km'}
            time={
              Data.distance
                ? moment(Date.parse(Data.distance.endDate)).format('HH:mm')
                : '19:00'
            }
          />
          <WorkoutCard
            bkColor={'#6e61a8'}
            name={'Steps'}
            num={Data.step ? Data.step.value : '5500'}
            unit={'steps'}
            time={
              Data.step
                ? moment(Date.parse(Data.step.endDate)).format('HH:mm')
                : '19:00'
            }
          />
          <WorkoutCard
            bkColor={'#3d7ea4'}
            name={'Flights Climebed'}
            num={Data.flightsClimed ? Data.flightsClimed.value : '5'}
            unit={'floor'}
            time={
              Data.flightsClimed
                ? moment(Date.parse(Data.flightsClimed.endDate)).format('HH:mm')
                : '19:00'
            }
          />
        </View>
      </>
    );
  }
  render() {
    const { navigation } = this.props;

    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent title={navigation.state.routeName} {...this.props} />
        <CalendarStrip
          //calendarAnimation={{ type: 'sequence', duration: 150 }}
          weekStripAnimation={{ Type: 'sequence', duration: 300 }}
          style={{ height: 100, paddingTop: 10, paddingBottom: 10 }}
          calendarHeaderStyle={{
            color: '#ffffff',
            fontFamily: 'Helvetica',
            fontSize: 18
          }}
          calendarColor={'#315574'}
          dateNumberStyle={{ color: '#ffffff' }}
          dateNameStyle={{ color: '#ffffff' }}
          highlightDateNumberStyle={{ color: '#1b1b1b' }}
          highlightDateNameStyle={{ color: '#1b1b1b' }}
          disabledDateNameStyle={{ color: '#ffffff' }}
          disabledDateNumberStyle={{ color: '#ffffff' }}
          iconContainer={{ flex: 0.1 }}
          onDateSelected={this.dateSelected}
        />
        <Content>
          {this.state.isToday ? this.renderData() : this.renderNodata()}
        </Content>
      </Container>
    );
  }
}
export default WorkoutPage;
