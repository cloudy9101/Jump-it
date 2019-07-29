import AppleHealthKit from 'rn-apple-healthkit';

// get the available permissions from AppleHealthKit.Constants object
const PERMS = AppleHealthKit.Constants.Permissions;
export const HealthOptions = {
  permissions: {
    read: [
      PERMS.StepCount,
      // PERMS.ActiveEnergyBurned,
      // PERMS.BasalEnergyBurned,
      PERMS.BodyMassIndex,
      PERMS.DistanceWalkingRunning,
      PERMS.FlightsClimbed,
      PERMS.Steps
      // PERMS.BiologicalSex,
      // PERMS.BloodGlucose,
      // PERMS.BloodPressureDiastolic,
      // PERMS.BloodPressureSystolic,
      // PERMS.DateOfBirth,
      // PERMS.DistanceCycling,
      // PERMS.HeartRate,
      // PERMS.Height,
      // PERMS.LeanBodyMass,
      // PERMS.SleepAnalysis,
      // PERMS.RespiratoryRate,
      // PERMS.Weight,
      // PERMS.BodyFatPercentage
    ]
    // write: [
    //   PERMS.StepCount,
    //   PERMS.BodyMassIndex,
    //   PERMS.DistanceWalkingRunning,
    //   PERMS.FlightsClimbed,
    //   PERMS.Steps,
    //   PERMS.BloodPressureDiastolic,
    //   PERMS.BloodPressureSystolic,
    //   PERMS.DistanceCycling,
    //   PERMS.Height,
    //   PERMS.LeanBodyMass,
    //   PERMS.MindfulSession,
    //   PERMS.Weight,
    //   PERMS.BodyFatPercentage
    // ]
  }
};
