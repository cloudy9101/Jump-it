import AppleHealthKit from 'rn-apple-healthkit';
import { STEP_COUNT, DISTANCE, FLIGHT_CLIME } from '../actiontypes';

function getStep(payload) {
  return { type: STEP_COUNT, payload };
}
export const getStepCount = config => {
  return dispatch => {
    AppleHealthKit.getStepCount(config, (err, results) => {
      if (err) {
        console.log('error initializing Healthkit: ', err);
        return;
      }
      dispatch(getStep(results));
    });
  };
};

function getDistanceSample(payload) {
  return { type: DISTANCE, payload };
}
export const getDistance = config => {
  return dispatch => {
    AppleHealthKit.getDistanceWalkingRunning(config, (err, results) => {
      if (err) {
        console.log(' getDistanceWalkingRunning: ', err);
        return;
      }
      dispatch(getDistanceSample(results));
    });
  };
};

function getFloorSample(payload) {
  return { type: FLIGHT_CLIME, payload };
}
export const getFloor = config => {
  return dispatch => {
    AppleHealthKit.getFlightsClimbed(config, (err, results) => {
      if (err) {
        console.log('getFlightsClimbed: ', err);
        return;
      }
      dispatch(getFloorSample(results));
    });
  };
};
