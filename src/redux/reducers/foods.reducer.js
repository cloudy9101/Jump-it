import { FETCH_FOODS_SUCCESS, FETCH_FOODS_ERROR, ADD_FOOD_SUCCESS, UPDATE_FOOD_VALUE, UPDATE_FOOD_SUCCESS, DELETE_FOOD_SUCCESS } from '../actiontypes/index';

const foodsInitState = { isFinished: true, data: [] };

const foods = (state = foodsInitState, action) => {
  switch (action.type) {
    case FETCH_FOODS_SUCCESS:
      return { isFinished: true, data: action.data };
      break;
    case FETCH_FOODS_ERROR:
      return { isFinished: true, error: action.error };
      break;
    case ADD_FOOD_SUCCESS:
      return { isFinished: true, data: [...state.data, action.data] };
      break;
    case UPDATE_FOOD_VALUE:
    case UPDATE_FOOD_SUCCESS:
      console.log(action.data)
      return { isFinished: true, data: [...state.data.filter((item) => {
        return item._id != action.data.id
      }), action.data.food] };
      break;
    case DELETE_FOOD_SUCCESS:
      console.log('Test');
      return {
        isFinished: true,
        data: state.data.filter(item => {
          return item._id != action.data;
        })
      };
      break;
    default:
      return state;
  }
};

export { foods };
