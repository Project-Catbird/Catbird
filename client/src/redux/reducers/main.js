import { combineReducers } from 'redux';
import * as qnaReducers from './qnaReducers.js';
import reviewsListReducer from './ratings-reviews/reviewsList.js';
import reviewsCountReducer from './ratings-reviews/reviewsCount.js';
import reviewsMetaReducer from './ratings-reviews/reviewsMeta.js';
import reviewsSortTypeReducer from './ratings-reviews/reviewsSortType.js';
import showNewReviewModalReducer from './ratings-reviews/showNewReviewModal.js';
import newReviewValidationReducer from './ratings-reviews/newReviewValidation.js';
import photoUploadReducer from './ratings-reviews/photoUpload.js';
import productsReducer from './Overview/productsReducer';
import productInfoReducer from './Overview/productInfoReducer';
import styleReducer from './Overview/styleReducer';
import styleInfoReducer from './Overview/styleInfoReducer';
import productIdReducer from './Overview/productIdReducer';




const rootReducer = combineReducers({
  // Overview
  products: productsReducer,
  productId: productIdReducer,
  productInfo: productInfoReducer,
  styles: styleReducer,
  style: styleInfoReducer,

  // RatingsReviews
  reviewsList: reviewsListReducer,
  reviewsCount: reviewsCountReducer,
  reviewsMeta: reviewsMetaReducer,
  reviewsSortType: reviewsSortTypeReducer,
  showNewReviewModal: showNewReviewModalReducer,
  newReviewValidation: newReviewValidationReducer,
  photoUpload: photoUploadReducer,

  //qna

  // product_id: qnaReducers.productIdReducer,
  product_name: qnaReducers.productNameReducer,
  qnaList: qnaReducers.qnaListReducer,
  addAnswerModalIsOpen: qnaReducers.addAnswerModalIsOpenReducer,
  addQuestionModalIsOpen: qnaReducers.addQuestionModalIsOpenReducer,
  searchBarTyped:qnaReducers.searchBarTypedReducer

});


export default rootReducer;