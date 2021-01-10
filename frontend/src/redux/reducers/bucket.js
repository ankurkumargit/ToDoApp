import { FETCH_BUCKETS, ADD_BUCKET } from '../constants/bucketConstants';

const initialState = {
  buckets: [],
};

const bucketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUCKETS:
      return {
        ...state,
        buckets: action.payload,
      };
    case ADD_BUCKET:
      return {
        ...state,
        buckets: action.payload,
      };
    default:
      return state;
  }
};

export default bucketsReducer;
