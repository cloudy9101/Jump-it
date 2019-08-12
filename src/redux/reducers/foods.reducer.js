import { FETCH_SUCCESS, FETCH_ERROR, ADD_FOOD_SUCCESS, UPDATE_FOOD_VALUE, UPDATE_FOOD_NAME, DELETE_FOOD_SUCCESS } from '../actiontypes/index';

const foodsInitState = { isFinished: true, data: [{ id: 1, name: "egg", value: 15}, { id: 2, name: "steak", value: 5 }] };

const foods = (state = foodsInitState, action) => {
  switch(action.type) {
    case FETCH_SUCCESS:
      return { isFinished: true, data: action.data };
      break;
    case FETCH_ERROR:
      return { isFinished: true, error: action.error };
      break;
    case ADD_FOOD_SUCCESS:
      return { isFinished: true, data: [...state.data, action.data] };
      break;
    case UPDATE_FOOD_VALUE:
      let item = state.data.find((item) => { return item.id === action.data.id });
      item.value = action.data.value;
      return { isFinished: true, data: [...state.data.filter((item) => {
        return item.id != action.data.id
      }), item] };
      break;
    case UPDATE_FOOD_NAME:
      item = state.data.find((item) => { return item.id === action.data.id });
      item.name = action.data.name;
      return { isFinished: true, data: [...state.data.filter((item) => {
        return item.id != action.data.id
      }), item] };
      break;
    case DELETE_FOOD_SUCCESS:
      console.log(action);
      return { isFinished: true, data: state.data.filter((item) => { return item.id != action.data; }) }
      break;
    default:
      return state;
  }
}

export { foods };
