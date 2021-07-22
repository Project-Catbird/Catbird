import Redux from 'redux';
import reviews from '../../../../../sampleData/reviews.js';

let initialState = reviews.reviews;

const reviewsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_REVIEWS_LIST':
      return action.reviewsList;
    default:
      return state;
  }
}

export default reviewsListReducer;