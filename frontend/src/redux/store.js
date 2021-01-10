import itemsReducer from './reducers/todo_items';
import bucketsReducer from './reducers/bucket';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  todos: itemsReducer,
  buckets: bucketsReducer,
});

const middleware = [thunk];
var initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
