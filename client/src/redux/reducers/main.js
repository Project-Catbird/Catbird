import { combineReducers } from 'redux';
import reviewsListReducer from './ratings-reviews/reviewsList.js';
import reviewsCountReducer from './ratings-reviews/reviewsCount.js';
import reviewsMetaReducer from './ratings-reviews/reviewsMeta.js';
import reviewsSortTypeReducer from './ratings-reviews/reviewsSortType.js';
import showNewReviewModalReducer from './ratings-reviews/showNewReviewModal.js';
import newReviewValidationReducer from './ratings-reviews/newReviewValidation.js';
import photoUploadReducer from './ratings-reviews/photoUpload.js';

const rootReducer = combineReducers({
  reviewsList: reviewsListReducer,
  reviewsCount: reviewsCountReducer,
  reviewsMeta: reviewsMetaReducer,
  reviewsSortType: reviewsSortTypeReducer,
  showNewReviewModal: showNewReviewModalReducer,
  newReviewValidation: newReviewValidationReducer,
  photoUpload: photoUploadReducer
  //TODO: Combine all reducers into one single rootReducer
  //Examples:
  //combineReducers({ counter: counter, todos: todos }).
  //ES6 property shorthand:  combineReducers({ counter, todos })
});


export default rootReducer;