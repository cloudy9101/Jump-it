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
  Button,
  Title
} from 'native-base';
import AppleHealthKit from 'rn-apple-healthkit';
import moment from 'moment';
import SectionHeader from '../components/SectionHeader';
import SectionItems from '../components/SectionItems';
import { HealthOptions } from '../commons/HealthOptions';
import HeaderComponent from '../components/HeaderComponent';
import { mockData } from '../commons/MockData';

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
  console.log('HealthkitInitSuccess..');
  this.sub = NativeAppEventEmitter.addListener('change:steps', evt => {
    console.log('cccccc');
    console.log(evt);
  });
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
    this.renderList = this.renderList.bind(this);
  }

  componentWillUnmount() {
    this.sub.remove();
  }

  renderList() {
    let arr = [];
    for (const obj of mockData) {
      const key = Object.keys(obj)[0];
      arr.push(
        <SectionHeader key={key} workDate={key} workCounts={obj[key].length} />
      );
      obj[key].forEach(v => {
        arr.push(
          <SectionItems
            key={v.id}
            name={v.name}
            frequency={v.value}
            workDate={v.date}
            {...this.props}
          />
        );
      });
    }
    return arr;
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <HeaderComponent title={navigation.state.routeName} {...this.props} />
        <Content>
          <List>{this.renderList()}</List>
        </Content>
      </Container>
    );
  }
}
export default WorkoutPage;
