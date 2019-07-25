import React, { Component } from 'react';
import { View, NativeAppEventEmitter } from 'react-native';
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
import AppleHealthKit from 'rn-apple-healthkit';

import SectionHeader from '../components/SectionHeader';
import SectionItems from '../components/SectionItems';
import { HealthOptions } from '../commons/HealthOptions';
import HeaderComponent from '../components/HeaderComponent';
import { mockData } from '../commons/MockData';

import WorkoutCard from '../components/WorkoutCard';

// AppleHealthKit.getDistanceWalkingRunning(HealthOptions, (err, results) => {
//   if (err) {
//     return;
//   }
//   console.log('distance value.......');
//   console.log(results);
// });
// let options = {
//   startDate: new Date(2019, 7, 22).toISOString(),
//   endDate: new Date().toISOString(),
//   type: 'Walking' // one of: ['Walking', 'StairClimbing', 'Running', 'Cycling', 'Workout']
// };

// AppleHealthKit.getFlightsClimbed(HealthOptions, (err, results) => {
//   if (err) {
//     return;
//   }
//   console.log('FlightsClimbed');
//   console.log(results);
// });
let options = {
  startDate: new Date(2019, 7, 20).toISOString(), // required
  endDate: new Date().toISOString() // optional; default now
};
AppleHealthKit.initHealthKit(HealthOptions, (err, results) => {
  if (err) {
    console.log('error initializing Healthkit: ', err);
    return;
  }
  // console.log('HealthkitInitSuccess..');
  // this.sub = NativeAppEventEmitter.addListener('change:steps', evt => {
  //   console.log('cccccc');
  //   console.log(evt);
  // });
  AppleHealthKit.getStepCount(null, (error, results) => {
    if (error) {
      console.log('getStepCountError: ', error);
      return;
    }
    console.log('step value.......');
    console.log(results);
  });
});

class WorkoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    //this.renderList = this.renderList.bind(this);
    this.handleDateSelected = this.handleDateSelected.bind(this);
  }
  handleDateSelected(date) {
    const newDate = date.toDate();
    this.setState({ date: newDate });
    // AsyncStorage.getItem('token').then(token => {
    //   this.props.fetchExercises(newDate, token);
    // });
  }

  // componentWillUnmount() {
  //   this.sub.remove();
  // }

  // renderList() {
  //   let arr = [];
  //   for (const obj of mockData) {
  //     const key = Object.keys(obj)[0];
  //     arr.push(
  //       <SectionHeader key={key} workDate={key} workCounts={obj[key].length} />
  //     );
  //     obj[key].forEach(v => {
  //       arr.push(
  //         <SectionItems
  //           key={v.id}
  //           name={v.name}
  //           frequency={v.value}
  //           workDate={v.date}
  //           {...this.props}
  //         />
  //       );
  //     });
  //   }
  //   return arr;
  // }

  render() {
    const { navigation } = this.props;

    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent title={navigation.state.routeName} {...this.props} />
        <CalendarStrip
          calendarAnimation={{ type: 'sequence', duration: 30 }}
          daySelectionAnimation={{
            type: 'background',
            duration: 200,
            highlightColor: '#1f3954'
          }}
          style={{ height: 100, paddingTop: 10, paddingBottom: 10 }}
          calendarHeaderStyle={{
            color: '#ffffff',
            fontFamily: 'Helvetica',
            fontSize: 18
          }}
          calendarColor={'#315574'}
          dateNumberStyle={{ color: '#ffffff' }}
          dateNameStyle={{ color: '#ffffff' }}
          highlightDateNumberStyle={{ color: '#ffffff' }}
          highlightDateNameStyle={{ color: '#ffffff' }}
          disabledDateNameStyle={{ color: '#ffffff' }}
          disabledDateNumberStyle={{ color: '#ffffff' }}
          iconContainer={{ flex: 0.1 }}
          onDateSelected={this.handleDateSelected}
        />
        <Content>
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
              shadowColor={'#4a8240'}
              name={'Working+Running Distance'}
              num={'6566'}
              unit={'step'}
              time={'19:00'}
            />
          </View>
        </Content>
      </Container>
    );
  }
}
export default WorkoutPage;
