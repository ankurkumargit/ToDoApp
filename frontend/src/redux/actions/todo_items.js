import {
  FETCH_ITEMS,
  ADD_ITEMS,
  DELETE_ITEM,
  MARKCOMPLETE_ITEM,
} from '../constants/itemConstants';
import Axios from 'axios';

export const fetchItems = () => async (dispatch) => {
  await Axios.get('/api/items')
    .then((items) =>
      //console.log(items);
      dispatch({
        type: FETCH_ITEMS,
        payload: items.data,
      })
    )
    .catch((error) => console.log(error));
};

export const deleteItem = (item) => async (dispatch) => {
  await Axios.post(`/api/items/delete`, { data: item })
    .then((items) =>
      //console.log(items);
      dispatch({
        type: DELETE_ITEM,
        payload: items.data,
      })
    )
    .catch((error) => console.log(error));
};

export const addItem = (postData) => async (dispatch) => {
  await Axios.post(`/api/items`, postData)
    .then((items) =>
      //console.log(items);
      dispatch({
        type: ADD_ITEMS,
        payload: items.data,
      })
    )
    .catch((error) => console.log(error));
};

export const markItemComplete = (postData) => async (dispatch) => {
  await Axios.post(`/api/items/markcomplete`, postData)
    .then((items) =>
      //console.log(items);
      dispatch({
        type: MARKCOMPLETE_ITEM,
        payload: items.data,
      })
    )
    .catch((error) => console.log(error));
};

export const updateItem = (postData) => async (dispatch) => {
  await Axios.post(`/api/items/update`, postData)
    .then((items) =>
      //console.log(items);
      dispatch({
        type: MARKCOMPLETE_ITEM,
        payload: items.data,
      })
    )
    .catch((error) => console.log(error));
};
