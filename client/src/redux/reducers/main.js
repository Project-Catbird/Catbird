import { combineReducers } from 'redux';
import * as qnaReducers from './qnaReducers.js';
import reviewsListReducer from './ratings-reviews/reviewsList.js';
import reviewsCountReducer from './ratings-reviews/reviewsCount.js';
import reviewsMetaReducer from './ratings-reviews/reviewsMeta.js';
import reviewsSortTypeReducer from './ratings-reviews/reviewsSortType.js';
import showNewReviewModalReducer from './ratings-reviews/showNewReviewModal.js';
import newReviewValidationReducer from './ratings-reviews/newReviewValidation.js';
import photoUploadReducer from './ratings-reviews/photoUpload.js';
import reviewFormReducer from './ratings-reviews/reviewForm.js';
import starSortReducer from './ratings-reviews/starSort.js';
import sortedReviewsListReducer from './ratings-reviews/sortedReviewsList.js';
import productsReducer from './Overview/productsReducer';
import productInfoReducer from './Overview/productInfoReducer';
import styleReducer from './Overview/styleReducer';
import styleInfoReducer from './Overview/styleInfoReducer';
import productIdReducer from './Overview/productIdReducer';
import currentImgReducer from './Overview/currentImgReducer';
import outfitListReducer from './related-comparisons/outfitListReducer';



const rootReducer = combineReducers({
  // Overview
  products: productsReducer,
  productId: productIdReducer,
  productInfo: productInfoReducer,
  styles: styleReducer,
  style: styleInfoReducer,
  currentImg: currentImgReducer,

  // RatingsReviews
  reviewsList: reviewsListReducer,
  reviewsCount: reviewsCountReducer,
  reviewsMeta: reviewsMetaReducer,
  reviewsSortType: reviewsSortTypeReducer,
  showNewReviewModal: showNewReviewModalReducer,
  newReviewValidation: newReviewValidationReducer,
  photoUpload: photoUploadReducer,
  reviewForm: reviewFormReducer,
  starSort: starSortReducer,
  sortedReviewsList: sortedReviewsListReducer,


// qna
  product_name: qnaReducers.productNameReducer,
  qnaList: qnaReducers.qnaListReducer,
  addAnswerModalIsOpen: qnaReducers.addAnswerModalIsOpenReducer,
  addQuestionModalIsOpen: qnaReducers.addQuestionModalIsOpenReducer,
  searchBarTyped:qnaReducers.searchBarTypedReducer,
  questionBody: qnaReducers.questionBodyReducer,
  quedtionId: qnaReducers.questionIdReducer,

  //related & comparison
  outfitList: outfitListReducer
});


export default rootReducer;