import { GET_HIGHBLOOD_DATA, GET_SUGAR_DATA } from '../actiontypes';

const initState = {
  labels: [],
  datasets: [],
  isLoading: false
};

export const highblood = (state = initState, action) => {
  switch (action.type) {
    case GET_HIGHBLOOD_DATA: {
<<<<<<< HEAD
      const { datasets, labels } = action.payload;

      return { ...initState, datasets, labels, isLoading: true };
=======
      const { datasets, labels, startIndex } = action.payload;
      const data = getData(datasets, startIndex);
      return { ...initState, datasets: data, labels, isLoading: true };
>>>>>>> 9cc202ac13d8276061f0b6fed77ddf5a4c5c70a4
    }
    default:
      return state;
  }
};
<<<<<<< HEAD

export const sugar = (state = initState, action) => {
  switch (action.type) {
    case GET_SUGAR_DATA: {
      const { datasets, labels } = action.payload;

      return { ...initState, datasets, labels, isLoading: true };
=======
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
>>>>>>> 9cc202ac13d8276061f0b6fed77ddf5a4c5c70a4
    }
    default:
      return state;
  }
};
<<<<<<< HEAD
=======

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
>>>>>>> 9cc202ac13d8276061f0b6fed77ddf5a4c5c70a4
