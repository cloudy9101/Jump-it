import AppleHealthKit from 'rn-apple-healthkit';

const PERMS = AppleHealthKit.Constants.Permissions;
const HealthOptions = {
  permissions: {
    read: [
      PERMS.StepCount,
      PERMS.BodyMassIndex,
      PERMS.DistanceWalkingRunning,
      PERMS.FlightsClimbed,
      PERMS.Steps
    ]
  }
};

let Data = {};
const initHeathKit = () => {
  AppleHealthKit.initHealthKit(HealthOptions, (err, results) => {
    if (err) {
      console.log('error initializing Healthkit: ', err);
      return;
    }
    AppleHealthKit.getStepCount(HealthOptions, async (error, results) => {
      if (error) {
        console.log('getStepCountError: ', error);
        return;
      }
      Data.step = results;
    });
    AppleHealthKit.getFlightsClimbed(HealthOptions, (err, results) => {
      if (err) {
        console.log('FlightsClimbed' + err.message);
        return;
      }
      Data.flightsClimed = results;
    });

    AppleHealthKit.getDistanceWalkingRunning(HealthOptions, (err, results) => {
      if (err) {
        console.log('getDistanceWalkingRunning: ', err);
        return;
      }
      Data.distance = results;
    });
  });
};

// let options = {
//   date: new Date(2019, 7, 25).toISOString() // optional; default now
// };

export { initHeathKit, Data };
