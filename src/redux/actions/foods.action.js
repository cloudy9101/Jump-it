import {
  FETCH_FOODS_SUCCESS,
  FETCH_FOODS_ERROR,
  ADD_FOOD_SUCCESS,
  UPDATE_FOOD_VALUE,
  UPDATE_FOOD_SUCCESS,
  DELETE_FOOD_SUCCESS,
} from '../actiontypes/index';
import { get, post, put, del } from '../../API';
import firebase from 'react-native-firebase';

function addFoodSuccess(data) {
  return { type: ADD_FOOD_SUCCESS, data: data }
}

function updateFoodValueSuccess(id, food) {
  return { type: UPDATE_FOOD_VALUE, data: { id, food } };
}

function updateFoodSuccess(id, food) {
  return { type: UPDATE_FOOD_SUCCESS, data: { id, food } };
}

function deleteFoodSuccess(id) {
  return { type: DELETE_FOOD_SUCCESS, data: id };
}

function fetchFoodsSuccess(data) {
  return { type: FETCH_FOODS_SUCCESS, data: data };
}

function fetchFoodsError(data) {
  return { type: FETCH_FOODS_ERROR, data: data };
}

const addFood = function(token, name, value, img) {
  return dispatch => {
    console.log(img);
    if(img.imgRes != null) {
      firebase.storage()
        .ref("foods/" + img.imgRes.fileName)
        .putFile(img.imgRes.path).then(snapshot => {
          const imgUri = snapshot.downloadURL;

          post('/api/users/foods', { name, value, imgUri }, token).then(res => {
            if (res.code === 0) {
              dispatch(addFoodSuccess(res.data));
            } else {
              console.log(res);
              dispatch(fetchFoodsError(res));
            }
          });
        }).catch(error => {
          console.log("ERROR1", error);
        })
    } else {
      const imgIndex = img.imgIndex;
      post('/api/users/foods', { name, value, imgIndex }, token).then(res => {
        if (res.code === 0) {
          dispatch(addFoodSuccess(res.data));
        } else {
          console.log(res);
          dispatch(fetchFoodsError(res));
        }
      });
    }
  }
}

const updateFoodValue = function(token, id, value) {
  return dispatch => {
    put('/api/users/foods/' + id, { value }, token).then(res => {
      if (res.code === 0) {
        dispatch(updateFoodValueSuccess(id, res.data));
      } else {
        dispatch(fetchFoodsError(res));
      }
    });
  }
}

const updateFood = function(token, id, name, value, img) {
  return dispatch => {
    if(img.imgRes != null) {
      console.log("RES", img)
      firebase.storage().ref("foods/" + img.imgRes.fileName)
        .putFile(img.imgRes.path).then(snapshot => {
          console.log(snapshot)
          const imgUri = snapshot.downloadURL;

          const imgIndex = img.imgIndex;
          put('/api/users/foods/' + id, { name, value, imgUri}, token).then(res => {
            if (res.code === 0) {
              dispatch(updateFoodSuccess(id, res.data));
            } else {
              dispatch(fetchFoodsError(res));
            }
          });
        }).catch(error => {
          console.log("ERROR1", error);
        })
    } else if(img.imgUri != null){
      const imgIndex = img.imgIndex;
      const imgUri = img.imgUri;
      put('/api/users/foods/' + id, { name, value, imgUri}, token).then(res => {
        if (res.code === 0) {
          dispatch(updateFoodSuccess(id, res.data));
        } else {
          dispatch(fetchFoodsError(res));
        }
      }).catch(error => {
        console.log(error);
      });
    } else {
      const imgIndex = img.imgIndex;
      put('/api/users/foods/' + id, { name, value, imgIndex }, token).then(res => {
        console.log(res);
        if (res.code === 0) {
          dispatch(updateFoodSuccess(id, res.data));
        } else {
          console.log(res);
          dispatch(fetchFoodsError(res));
        }
      }).catch(error => {
        console.log(error);
      });
    }
  }
}

const deleteFood = function(token, id) {
  return dispatch => {
    del('/api/users/foods/' + id, token).then(res => {
      if (res.code === 0) {
        dispatch(deleteFoodSuccess(id));
      } else {
        dispatch(fetchFoodsError(res));
      }
    });
  }
}

const fetchFoods = function(token) {
  return dispatch => {
    get('/api/users/foods', token).then(res => {
      if (res.code === 0) {
        dispatch(fetchFoodsSuccess(res.data));
      } else {
        dispatch(fetchFoodsError(res));
      }
    });
  };
}

export { addFood, updateFoodValue, updateFood, deleteFood, fetchFoods };
