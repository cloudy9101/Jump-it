import {
  GET_HIGHBLOOD_DATA,
  GET_SUGAR_DATA,
  CLEAR_HIGHBLOOD,
  CLEAR_SUGAR
} from '../actiontypes';

const initState = {
  labels: [],
  datasets: [],
  isLoading: false
};

export const highblood = (state = initState, action) => {
  switch (action.type) {
    case GET_HIGHBLOOD_DATA: {
      const { datasets, labels } = action.payload;

      return { ...initState, datasets, labels, isLoading: true };
    }
    case CLEAR_HIGHBLOOD: {
      return { ...initState };
    }
    default:
      return state;
  }
};

export const sugar = (state = initState, action) => {
  switch (action.type) {
    case GET_SUGAR_DATA: {
      const { datasets, labels } = action.payload;

      return { ...initState, datasets, labels, isLoading: true };
    }
    case CLEAR_SUGAR: {
      return { ...initState };
    }
    default:
      return state;
  }
};
