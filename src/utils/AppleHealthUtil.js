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
const initHeathKit = (options = HealthOptions) => {
  AppleHealthKit.initHealthKit(HealthOptions, (err, results) => {
    if (err) {
      console.log('error initializing Healthkit: ', err);
      return;
    }
  });
};

export { initHeathKit };
