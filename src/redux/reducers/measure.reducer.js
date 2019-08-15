import { GET_HIGHBLOOD_DATA } from '../actiontypes';

const initState = {
  labels: [],
  datasets: [],
  isLoading: false
};

export const highblood = (state = initState, action) => {
  switch (action.type) {
    case GET_HIGHBLOOD_DATA: {
      const { datasets, labels, startIndex } = action.payload;
      datasets.forEach(arr => {
        for (let i = 0; i < startIndex; i++) {
          arr.data.unshift(0);
        }
      });

      return { ...initState, datasets, labels, isLoading: true };
    }

    default:
      return state;
  }
};
