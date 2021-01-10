import {
  FETCH_ITEMS,
  ADD_ITEMS,
  DELETE_ITEM,
  MARKCOMPLETE_ITEM,
} from '../constants/itemConstants';

const initialState = {
  items: [],
  item: {},
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: action.payload,
      };
    case MARKCOMPLETE_ITEM:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;
