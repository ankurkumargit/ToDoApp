import { FETCH_BUCKETS, ADD_BUCKET } from '../constants/bucketConstants';
import Axios from 'axios';

export const fetchBuckets = () => async (dispatch) => {
  await Axios.get('/api/buckets')
    .then((items) =>
      dispatch({
        type: FETCH_BUCKETS,
        payload: items.data,
      })
    )
    .catch((error) => console.log(error));
};

export const addBucket = (postData) => async (dispatch) => {
  await Axios.post(`/api/buckets`, postData)
    .then((items) =>
      dispatch({
        type: ADD_BUCKET,
        payload: items.data,
      })
    )
    .catch((error) => console.log(error));
};
