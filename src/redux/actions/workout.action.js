import { Platform } from 'react-native';
import moment from 'moment';
import AppleHealthKit from 'rn-apple-healthkit';
import GoogleFit, { Scopes } from 'react-native-google-fit';
import { STEP_COUNT, DISTANCE, FLIGHT_CLIME } from '../actiontypes';
import { post } from '../../API';

function getAndroidOptions(config) {
  const startDate = moment(config.date, moment.ISO_8601).startOf('day');
  let endDate = moment(config.date, moment.ISO_8601).endOf('day');
  if(endDate.isSame(moment(), 'd')) { endDate = moment(); }
  const options = { startDate: startDate.toISOString(), endDate: endDate.toISOString() };
  return options;
}

function getStep(payload) {
  return { type: STEP_COUNT, payload };
}
export const getStepCount = (config, token) => {
  return dispatch => {
    if(Platform.OS === 'android') {
      console.log(config)
      const date = moment(config.date, moment.ISO_8601);
      const options = getAndroidOptions(config);
      GoogleFit.getDailyStepCountSamples(options)
        .then((res) => {
          console.log('Daily steps >>> ', res)
          const steps = res.find(e => {
            return e.source === "com.google.android.gms:merge_step_deltas";
          }).steps.find(e => {
            return date.isSame(moment(e.date), 'd');
          })
          let value = 0;
          if(steps) {
            value = steps.value;
          }
          const results = { value, ...options };
          dispatch(getStep(results));
          post(
            '/api/users/workout/save',
            { step: results, date: new Date() },
            token
          );
       })
       .catch((err) => {console.warn(err)})
    } else {
      AppleHealthKit.getStepCount(config, (err, results) => {
        if (err) {
          console.log('error initializing Healthkit: ', err);
          return;
        }
        console.log(results);
        dispatch(getStep(results));
        post(
          '/api/users/workout/save',
          { step: results, date: new Date() },
          token
        );
      });
    }
  };
};

function getDistanceSample(payload) {
  return { type: DISTANCE, payload };
}
export const getDistance = (config, token) => {
  return dispatch => {
    if(Platform.OS === 'android') {
      console.log(config)
      const options = getAndroidOptions(config);
      GoogleFit.getDailyDistanceSamples(options, (err, res) => {
          console.log('Daily distance >>> ', res)
          console.log('Daily distance >>> ', err)
        if(res) {
          let value = 0;
          res.map(e => {
            value += e.distance;
          })
          const results = { value, ...options };
          dispatch(getDistanceSample(results));
          post(
            '/api/users/workout/save',
            { distance: results, date: new Date() },
            token
          );
        } else {
          let value = 0;
          const results = { value, ...options };
          dispatch(getDistanceSample(results));
        }
       })
    } else {
      AppleHealthKit.getDistanceWalkingRunning(config, (err, results) => {
        if (err) {
          console.log(' getDistanceWalkingRunning: ', err);
          return;
        }

        dispatch(getDistanceSample(results));
        post(
          '/api/users/workout/save',
          { distance: results, date: new Date() },
          token
        );
      });
    }
  };
};

function getFloorSample(payload) {
  return { type: FLIGHT_CLIME, payload };
}
export const getFloor = (config, token) => {
  return dispatch => {
    if(Platform.OS === 'android') {
      console.log(config)
      const options = getAndroidOptions(config);
      const results = { value: 0, ...options }
      dispatch(getFloorSample(results));
    } else {
      AppleHealthKit.getFlightsClimbed(config, (err, results) => {
        if (err) {
          console.log('getFlightsClimbed: ', err);
          return;
        }
        dispatch(getFloorSample(results));
        post(
          '/api/users/workout/save',
          { floor: results, date: new Date() },
          token
        );
      });
    }
  };
};
