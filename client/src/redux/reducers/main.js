import { combineReducers } from 'redux';
import reviewsListReducer from './ratings-reviews/reviewsList.js';
import reviewsCountReducer from './ratings-reviews/reviewsCount.js';
import reviewsMetaReducer from './ratings-reviews/reviewsMeta.js';
import reviewsSortTypeReducer from './ratings-reviews/reviewsSortType.js';


const rootReducer = combineReducers({
  reviewsList: reviewsListReducer,
  reviewsCount: reviewsCountReducer,
  reviewsMeta: reviewsMetaReducer,
  reviewsSortType: reviewsSortTypeReducer
  //TODO: Combine all reducers into one single rootReducer
  //Examples:
  //combineReducers({ counter: counter, todos: todos }).
  //ES6 property shorthand:  combineReducers({ counter, todos })
});


export default rootReducer;