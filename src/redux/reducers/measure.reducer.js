import { GET_HIGHBLOOD_DATA, GET_SUGAR_DATA } from '../actiontypes';

const initState = {
  labels: [],
  datasets: [],
  isLoading: false
};

export const highblood = (state = initState, action) => {
  switch (action.type) {
    case GET_HIGHBLOOD_DATA: {
      const { datasets, labels, startIndex } = action.payload;
      const data = getData(datasets, startIndex);
      return { ...initState, datasets: data, labels, isLoading: true };
    }
    default:
      return state;
  }
};
// const sugarState = {
//   labels: [],
//   datasets: [],
//   isLoading: false
// };
export const sugar = (state = initState, action) => {
  switch (action.type) {
    case GET_SUGAR_DATA: {
      const { datasets, labels, startIndex } = action.payload;
      const data = getData(datasets, startIndex);
      return { ...initState, datasets: data, labels, isLoading: true };
    }
    default:
      return state;
  }
};

function getData(arr, startIndex) {
  arr.forEach(e => {
    if (e.data.length !== 0) {
      for (let i = 0; i < startIndex; i++) {
        e.data.unshift(0);
      }
    } else {
      e.data.push(0);
    }
  });
  return arr;
}
