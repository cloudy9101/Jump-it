import { STEP_COUNT, DISTANCE, FLIGHT_CLIME } from '../actiontypes';

initState = {
  value: '5500',
  startDate: '',
  endDate: '19:00'
};

const stepCount = (state = initState, action) => {
  switch (action.type) {
    case STEP_COUNT: {
      return { ...initState, ...action.payload };
    }
    default:
      return state;
  }
};
const distance = (state = initState, action) => {
  switch (action.type) {
    case DISTANCE: {
      return { ...initState, ...action.payload };
    }
    default:
      return state;
  }
};
const floor = (state = initState, action) => {
  switch (action.type) {
    case FLIGHT_CLIME: {
      return { ...initState, ...action.payload };
    }
    default:
      return state;
  }
};

export { stepCount, floor, distance };
