import AppleHealthKit from 'rn-apple-healthkit';
import { STEP_COUNT, DISTANCE, FLIGHT_CLIME } from '../actiontypes';
import { post } from '../../API';

function getStep(payload) {
  return { type: STEP_COUNT, payload };
}
export const getStepCount = (config, token) => {
  return dispatch => {
    AppleHealthKit.getStepCount(config, (err, results) => {
      if (err) {
        console.log('error initializing Healthkit: ', err);
        return;
      }
      dispatch(getStep(results));
      post(
        '/api/users/workout/save',
        { step: results, date: new Date() },
        token
      );
    });
  };
};

function getDistanceSample(payload) {
  return { type: DISTANCE, payload };
}
export const getDistance = (config, token) => {
  return dispatch => {
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
  };
};

function getFloorSample(payload) {
  return { type: FLIGHT_CLIME, payload };
}
export const getFloor = (config, token) => {
  return dispatch => {
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
  };
};
