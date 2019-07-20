import AppleHealthKit from 'rn-apple-healthkit';

// get the available permissions from AppleHealthKit.Constants object
const PERMS = AppleHealthKit.Constants.Permissions;
export const HealthOptions = {
  permissions: {
    read: [
      PERMS.StepCount,
      PERMS.Height,
      PERMS.ActiveEnergyBurned,
      PERMS.BasalEnergyBurned,
      PERMS.BloodGlucose,
      PERMS.BloodPressureDiastolic,
      PERMS.BloodPressureSystolic,
      PERMS.BodyMassIndex,
      PERMS.DistanceWalkingRunning,
      PERMS.FlightsClimbed,
      PERMS.DistanceWalkingRunning,
      PERMS.HeartRate,
      PERMS.Height,
      PERMS.LeanBodyMass,
      PERMS.Steps,
      PERMS.BodyFatPercentage
    ],
    write: [
      PERMS.StepCount,
      PERMS.BloodPressureDiastolic,
      PERMS.BloodPressureSystolic,
      PERMS.BodyMassIndex,
      PERMS.DistanceWalkingRunning,
      PERMS.FlightsClimbed,
      PERMS.Height,
      PERMS.LeanBodyMass,
      PERMS.Steps,
      PERMS.BodyFatPercentage
    ]
  }
};
