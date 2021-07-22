import { combineReducers } from 'redux';
import reviewsListReducer from './ratings-reviews/reviewsList.js';


const rootReducer = combineReducers({
  reviewsList: reviewsListReducer
  //TODO: Combine all reducers into one single rootReducer
  //Examples:
  //combineReducers({ counter: counter, todos: todos }).
  //ES6 property shorthand:  combineReducers({ counter, todos })
});


export default rootReducer;