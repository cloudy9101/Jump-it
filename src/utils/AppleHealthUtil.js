import { View } from 'react-native';
import AppleHealthKit from 'rn-apple-healthkit';
import { HealthOptions } from '../commons/HealthOptions';
import { Platform } from 'react-native';
import AppleHealthKit from 'rn-apple-healthkit';
import { HealthOptions } from '../commons/HealthOptions';
AppleHealthKit.initHealthKit(HealthOptions, (err, results) => {
  if (err) {
    console.log('error initializing Healthkit: ', err);
    return;
  }
});
AppleHealthKit.getStepCount(null, (error, results) => {
  if (error) {
    console.log('getStepCountError: ', error);
    return;
  }
  console.log('step value.......');
  console.log(results);
});
let options = {
  date: new Date(2019, 7, 25).toISOString() // optional; default now
};
AppleHealthKit.getFlightsClimbed(options, (err, results) => {
  if (err) {
    console.log('FlightsClimbed' + err.message);
    return;
  }
  console.log('FlightsClimbed');
  console.log(results);
});

AppleHealthKit.getDistanceWalkingRunning(null, (err, results) => {
  if (err) {
    return;
  }
  console.log('distance value.......');
  console.log(results);
});

// let options = {
//   startDate: new Date(2019, 7, 20).toISOString(), // required
//   endDate: new Date().toISOString() // optional; default now
// };
