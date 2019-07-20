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
const mockData = [
  {
    '01-2019': [
      {
        id: 1,
        name: 'runing',
        value: '1 mins',
        date: moment().format('DD/MM/YY')
      },
      {
        id: 2,
        name: 'runing',
        value: '2 mins',
        date: moment().format('DD/MM/YY')
      },
      {
        id: 3,
        name: 'runing',
        value: '3 mins',
        date: moment().format('DD/MM/YY')
      }
    ]
  },
  {
    '02-2019': [
      {
        id: 1,
        name: 'runing',
        value: '52 mins',
        date: moment().format('DD/MM/YY')
      },
      {
        id: 2,
        name: 'runing',
        value: '91 mins',
        date: moment().format('DD/MM/YY')
      },
      {
        id: 3,
        name: 'runing',
        value: '10 mins',
        date: moment().format('DD/MM/YY')
      }
    ]
  },
  {
    '03-2019': [
      {
        id: 1,
        name: 'runing',
        value: '55 mins',
        date: moment().format('DD/MM/YY')
      },
      {
        id: 2,
        name: 'runing',
        value: '9 mins',
        date: moment().format('DD/MM/YY')
      }
    ]
  }
];

const stepCountOptions = {
  date: new Date(2019, 6, 17).toISOString()
};

let energyBurnedOption = {
  startDate: new Date(2019, 6, 17).toISOString(), // required
  endDate: new Date().toISOString()
};
let distanceWalkingRunningOption = {
  unit: 'meter', // optional; default 'meter'
  date: new Date(2019, 6, 17).toISOString() // optional; default now
};
let flightsClimbedOption = {
  date: new Date(2019, 6, 17).toISOString() // optional; default now
};
AppleHealthKit.initHealthKit(HealthOptions, (err, results) => {
  if (err) {
    console.log('error initializing Healthkit: ', err);
    return;
  }
  console.log('HealthkitInitSuccess..');
});
AppleHealthKit.getStepCount(stepCountOptions, (err, results) => {
  if (err) {
    return;
  }
  console.log('step.......');
  console.log(results);
});
AppleHealthKit.getActiveEnergyBurned(energyBurnedOption, (err, results) => {
  if (err) {
    return;
  }
  console.log('energy burned....');
  console.log(results);
});
AppleHealthKit.getDistanceWalkingRunning(
  distanceWalkingRunningOption,
  (err, results) => {
    if (err) {
      console.log(err.message + 'distance  Working....');
      return;
    }
    console.log('distance  Working....');
    console.log(results);
  }
);
AppleHealthKit.getFlightsClimbed(flightsClimbedOption, (err, result) => {
  if (err) {
    console.log(err.message + '  flight');
    return;
  }
  console.log('flight  climbing....');
  console.log(result);
});
let heartRateSamples = {
  unit: 'bpm', // optional; default 'bpm'
  startDate: new Date(2019, 6, 17).toISOString(), // required
  endDate: new Date().toISOString(), // optional; default now
  ascending: false, // optional; default false
  limit: 10 // optional; default no limit
};
AppleHealthKit.getHeartRateSamples(heartRateSamples, (err, result) => {
  if (err) {
    return;
  }
  console.log('heart  rate....');
  console.log(result);
});
class WorkoutPage extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
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
